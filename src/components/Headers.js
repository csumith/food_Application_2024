import { LOGO_URL } from "../../utils/constant"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import useOnlineState from "../../utils/useOnlineStatus"
const Headers=()=>{
     const onlineStatus = useOnlineState()
    //Never use a useState of outside of your component
    //useState is use to crete a localvairable inside you functional component
    //try to call this hook on the top only
    const [btn,setbtn]= useState("login")


    // if no dependency array => useEffect is called on every render
    // if array dependency is empty[] then it will called once at the intial stage of rendering
    //if I passed any state inside the dependency so whenever over state will update it will called useEffect
     useEffect(()=>{
        console.log("useEffect called")
    },[])
    return(
        <div className="flex justify-between bg-orange-700 shadow-lg">
            <div className="logo-container text-white text-xl font-semibold">
                <img className="w-32" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4" >
                    
                    <li className="px-4 text-white hover:text-gray-300">Status {onlineStatus?
                        <div className="online-status"></div>
                        :<div className="online-status1"></div>}
                    </li>
                    
                    <li className="px-4 text-white hover:text-gray-300"><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About-Us</a></li> */}  
                    <li className="px-4 text-white hover:text-gray-300"><Link to="/about">About Us</Link></li>
                    <li className="px-4 text-white hover:text-gray-300"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 text-white hover:text-gray-300"><Link to="/grosary">Grosary</Link></li>
                    <li className="px-4 text-white hover:text-gray-300">Cart</li>
                    <li className="px-4 text-white hover:text-gray-300"><button onClick={()=>{
                         btn==="login" ?setbtn("logout"):setbtn("login")
                    }}>{btn}</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Headers