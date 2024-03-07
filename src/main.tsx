import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UIProvider } from '@yamada-ui/react'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  </React.StrictMode>,
)
