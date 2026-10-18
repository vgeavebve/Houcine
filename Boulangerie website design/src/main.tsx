import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { createRoot as root } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Analytics />
  </>
)
