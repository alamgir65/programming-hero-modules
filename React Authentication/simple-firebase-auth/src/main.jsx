import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layouts/Root.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Login from './components/Login.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component : Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'about',
        Component:  About
      },
      {
        path: 'login',
        Component: Login
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
