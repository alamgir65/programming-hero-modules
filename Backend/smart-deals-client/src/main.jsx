import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RootLayout from './layouts/RootLayout.jsx';
import Home from './components/Home.jsx';
import AllProducts from './components/AllProducts.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthProvider from './context/AuthProvider.jsx';
import Register from './components/Register.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'allProducts',
        Component: AllProducts
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
