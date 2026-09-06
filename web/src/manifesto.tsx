import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startAnalytics } from './analytics'
import { ManifestoPage } from './pages/ManifestoPage'
import './styles/global.css'

const root = document.getElementById('root')
if (!root) {
  throw new Error('Missing #root element in manifesto/index.html')
}

createRoot(root).render(
  <StrictMode>
    <ManifestoPage />
  </StrictMode>,
)

startAnalytics()
