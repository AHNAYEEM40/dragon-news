import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
            path:'/login',
            element:<Login></Login>
            },
            {
            path:'/register',
            element:<Register></Register>,
            
            }
        ]
    }
]);
export default routes;