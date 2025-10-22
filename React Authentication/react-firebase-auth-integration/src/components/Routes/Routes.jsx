import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Register from "../Register/Register";
import Login from '../Login/Login'
import Orders from "../Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Dashboard/Dashboard";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/orders',
                element: <PrivateRoutes>
                    <Orders></Orders>
                </PrivateRoutes>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes>
                    <Dashboard></Dashboard>
                </PrivateRoutes>
            }
        ]
    }
]);