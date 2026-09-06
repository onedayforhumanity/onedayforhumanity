import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startAnalytics } from './analytics'
import { LandingPage } from './pages/LandingPage'
import './styles/global.css'

const root = document.getElementById('root')
if (!root) {
  throw new Error('Missing #root element in index.html')
}

createRoot(root).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)

startAnalytics()
