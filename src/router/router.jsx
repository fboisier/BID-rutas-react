import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import ContactoDetalle from "../pages/ContactoDetalle";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/contacto",
                element: <Contacto />,
            },
            {
                path: "/contacto/:identificador",
                element: <ContactoDetalle />,
            },
            {
                path: "/acerca",
                element: <Acerca />,
            },
        ]
    },
    
]);