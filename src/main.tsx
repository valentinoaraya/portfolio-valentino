import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/anton/400.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/yellowtail/400.css'
import '@fontsource/zilla-slab/700.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
import './index.css'
import './sections.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
