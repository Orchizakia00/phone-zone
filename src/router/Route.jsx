import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Login from "../pages/Login";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/favorites',
                element:<Favorites></Favorites>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])


export default myCreatedRoute;