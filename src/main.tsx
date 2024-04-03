import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './pages/Home/App'
import Detail from './pages/Detail/Detail'
import Cart from './pages/Cart/Cart'

/* console.log(window.Telegram.WebApp.initData); */


const router = createBrowserRouter([
  {
    path: '/afroked',
    element: <App />
  },
  {
    path: '/afroked/detail/:productId',
    element: <Detail className='bg-white min-h-screen flex flex-col' />
  },
  {
    path: '/afroked/cart',
    element: <Cart className='px-2 py-2 h-screen' />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
