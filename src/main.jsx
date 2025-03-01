import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './components/App/app'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
