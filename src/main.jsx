import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Api, { Geminicontext } from './context/Api.jsx'

createRoot(document.getElementById('root')).render(
  <Api>
    <App />
  </Api>
  )
