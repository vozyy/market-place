import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import App from './App.jsx'
import { ListProvider } from './features/list/provider/ListProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ListProvider>
        <App />
      </ListProvider>
  </StrictMode>,
)
