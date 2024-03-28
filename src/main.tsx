import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import './index.css'
import Section from './components/Section/Section.tsx';
import Detail, { loader } from './components/Detail/Detail.tsx';

const router = createBrowserRouter([
  {
    path: "/afroked",
    element: <App />,
    children: [
      {
        path: "/afroked/",
        element: <Section className='grow flex flex-col items-center justify-center w-full h-full py-2' />,
      },
      {
        path: "/afroked/detail/:productId",
        element: <Detail />,
        loader: loader
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
