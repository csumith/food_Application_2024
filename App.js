import React from "react"
import  ReactDOM  from "react-dom/client"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Headers from "./src/components/Headers";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ResturantMenu from "./src/components/ResturantMenu";
import Newclass from "./src/components/Newclass";
import Error from "./src/components/Error";


import { Suspense,lazy } from "react"
//chunking
//lazy loading
//code spliting
//ondemand loading
const Grosary = lazy(()=> import("./src/components/grosary"))




const stylecard = {
    backgroundColour:"blue"
}



  const Applayout = ()=>{
    return(
        <div className="app">
            <Headers/>
            <Outlet/>
         
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children :[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/resturant/:restroID",
                element:<ResturantMenu/>
            },
            {
                path:"/new",
                element:<Newclass/>
            },
            {
                path:"/grosary",
                element:<Suspense><Grosary/></Suspense>
            }
        ],
        errorElement:<Error/>
    },
 

])


let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)