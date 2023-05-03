import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contex/AuthProvider';
import PrivateProvider from './contex/PrivateProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <PrivateProvider>
        <App />
      </PrivateProvider>
    </AuthProvider>
  </React.StrictMode >,
)
