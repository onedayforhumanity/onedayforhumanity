import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startAnalytics } from './analytics'
import { PrinciplesPage } from './pages/PrinciplesPage'
import './styles/global.css'

const root = document.getElementById('root')
if (!root) {
  throw new Error('Missing #root element in principles/index.html')
}

createRoot(root).render(
  <StrictMode>
    <PrinciplesPage />
  </StrictMode>,
)

startAnalytics()
