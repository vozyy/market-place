import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import App from './App.jsx'
import { ListContext } from './features/list/context/listContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListContext.Provider value={'hodnota z contextu'}>
      <App />
    </ListContext.Provider>
  </StrictMode>,
)
