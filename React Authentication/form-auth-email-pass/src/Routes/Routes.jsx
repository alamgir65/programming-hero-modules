import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../components/Root";
import Home from "../components/Home";
import SignUpForm from "../components/SignUpForm";

export const router = createBrowserRouter([
    {
        path : '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/sign-up',
                Component: SignUpForm
            }
        ]
    }
])