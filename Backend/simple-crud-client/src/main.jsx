import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import UserForm from './components/UserForm.jsx'
import Details from './components/Details.jsx'
import Edit from './components/Edit.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/add-user',
    Component: UserForm
  },
  {
    path: 'users/:id',
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
    Component: Details
  },
  {
    path: 'users/update/:id',
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
    Component: Edit
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
