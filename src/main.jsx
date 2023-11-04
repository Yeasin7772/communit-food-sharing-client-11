import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import AuthProviders from './Providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto font-poppins'>
      <AuthProviders>
        <RouterProvider router={Routes} />
      </AuthProviders>
    </div>
  </React.StrictMode>,
)
