// Provisions the Azure Static Web App (Free tier) that hosts the landing page.
//
// The resource group is created by hand, once, before this runs:
//   az group create --name rg-onedayforhumanity-prod --location westeurope
// and this template is then deployed into it:
//   az deployment group create -g rg-onedayforhumanity-prod -f infra/main.bicep -p infra/main.bicepparam
//
// This template is run by hand, not by CI. GitHub Actions deploys site content
// with the Static Web App's deployment token and never touches the Azure
// control plane, so there is no service principal to manage or rotate.
//
// Free tier: 100 GB bandwidth/month, 250 MB app size, 2 custom domains,
// 3 staging environments, no SLA.

@description('Name of the Static Web App.')
@minLength(1)
@maxLength(60)
param name string = 'swa-onedayforhumanity-prod'

@description('''
Region for the Static Web App. Microsoft.Web/staticSites is offered in these
five regions only; the CDN in front of the app is global regardless of which is
chosen, so this decides where the deployment metadata lives, not where the site
is served from.
''')
@allowed([
  'centralus'
  'eastus2'
  'westus2'
  'westeurope'
  'eastasia'
])
param location string = 'westeurope'

@description('Environment name, recorded as a tag.')
param environment string = 'prod'

var tags = {
  project: 'One Day for Humanity'
  environment: environment
  managedBy: 'bicep'
}

resource site 'Microsoft.Web/staticSites@2024-04-01' = {
  name: name
  location: location
  tags: tags
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    // repositoryUrl and repositoryToken are deliberately omitted. Setting them
    // makes Azure generate and commit its own GitHub Actions workflow, which
    // would then race the one in .github/workflows/deploy.yml. 'Custom' tells
    // Azure the deployment is driven from outside, using the deployment token.
    provider: 'Custom'

    // Lets a deployment update the app's routing and headers from
    // staticwebapp.config.json in the uploaded content.
    allowConfigFileUpdates: true

    // Pull requests from this repository get their own preview URL.
    stagingEnvironmentPolicy: 'Enabled'

    // Standard-tier feature; must stay off on Free.
    enterpriseGradeCdnStatus: 'Disabled'
  }
}

output staticWebAppName string = site.name
output defaultHostname string = site.properties.defaultHostname
output siteUrl string = 'https://${site.properties.defaultHostname}'
