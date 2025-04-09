import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './pages/Auth/Auth.jsx'
import Signin from './pages/Signin/Signin.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Root from './pages/Root/Root.jsx'
import Products from './pages/Products/Products.jsx'

const routes = createBrowserRouter([
  {
    path : "/",
    element : <Auth/>,
    children : [
      {
        path : "",
        element : <Signin/>
      },
      {
        path : "signup",
        element : <Signup/>
      }
    ]
  },
  {
    path : "/dashboard",
    element : <Root/>,
    children : [
      {
        path : "products",
        element : <Products/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)