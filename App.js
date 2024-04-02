import React, { useEffect, useState } from "react"
import  ReactDOM  from "react-dom/client"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Headers from "./src/components/Headers";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ResturantMenu from "./src/components/ResturantMenu";
import Newclass from "./src/components/Newclass";
import Error from "./src/components/Error";
import Usercontext from "./utils/Usercontext";
import { Suspense,lazy } from "react"
//chunking
//lazy loading
//code spliting
//ondemand loading
 const Grosary = lazy(()=> import("./src/components/Grosary"))




const stylecard = {
    backgroundColour:"blue"
}



  const Applayout = ()=>{
    const [name,setname] = useState("")

    useEffect(()=>{
     //authentication
     const data = {
        name : "Sumit Chouhan"

     }
     setname(data.name)
    },[])
    return(
        <Usercontext.Provider value = {{LoggedInUSer:name,setname}}>
        <div className="app">
            <Headers/>
            <Outlet/>
         
        </div>
        </Usercontext.Provider>
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