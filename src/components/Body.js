import RestroCard ,{withPromoteLabel} from "./RestroCard"
import Shimer from "./Shimer"
import { Link } from "react-router-dom"
import { useState,useEffect,useContext } from "react"
import useOnlineState from "../../utils/useOnlineStatus"
import Usercontext from "../../utils/Usercontext"

const Body=()=>{
    //custom hook is created
const onlineStatus = useOnlineState()

const RestroCardPromoted = withPromoteLabel(RestroCard)

console.log("checking body rerendering") 



const [ListofResturant,setListofResturant] = useState([])
const [filterResturant,setfilterResturant] = useState([])
const [searchText,setsearchText]= useState("")


// if no dependency array => useEffect is called on every render
    useEffect(()=>{
        fetchdata()
      },[])

      const fetchdata= async()=>{

        let data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let resp = await data.json()
        let json = resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListofResturant(json)
        setfilterResturant(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
    
      if(onlineStatus ===false) return <h1>Looks like you are offline!!  Pls check your internet Connection</h1>
    
     const {LoggedInUSer,setname} = useContext(Usercontext) 
    return (
        <div className="body">
            <div className="filter flex items-center ">
                <div className="search m-4 p-4 flex items-center">
                    <input 
                    type="text" 
                    className="search-box border border-solid border-black rounded-lg" 
                    value={searchText} 
                    onChange={(e)=>{
                    setsearchText(e.target.value)
                    }}
                    />
                    <button className="search_btn
                     bg-green-600
                      hover:bg-green-700
                      text-white 
                      font-bold 
                      m-2 px-4 
                      rounded-xl"  
                    onClick={()=>{
                    inputfilter= ListofResturant.filter((ele)=>
                           ele.info.name.toLowerCase().includes(searchText.toLowerCase())
                           
                        )
                        setfilterResturant(inputfilter)
                    }} >Search</button>
                </div>
                
                 <div className="topRestro">
                 <button className="filter-btn
                  bg-green-600
                   hover:bg-green-700
                    text-white 
                    font-bold 
                    m-4 px-2 py-1 
                    rounded-xl"
                     onClick={()=>{
                     restroFilter =ListofResturant.filter((restaurant)=>(restaurant.info.avgRating>4.2)) 
                     setfilterResturant(restroFilter)

                }}>Top-Rated-Resturants</button>
                 </div>
              
                 <div className="search m-4 p-4 flex items-center">
                    <label>UserName :</label>
                    <input 
                    type="text" 
                    className="search-box border border-solid border-black rounded-lg px-2" 
                    value={LoggedInUSer} 
                    onChange={(e)=>{
                    setname(e.target.value)
                    }}
                    />
                   
                </div>
                
               
            </div>
            <div className="rest-container flex flex-wrap ">

                {/* <RestroCard resData= {resList[7]}/> */}
               
               {
             filterResturant.map((restaurant)=>(
              <Link key={restaurant.info.id} to={"/resturant/"+restaurant.info.id}>
                  {
                   restaurant.info.avgRating>4.0? (
                   <RestroCardPromoted resData={restaurant}/>
                   ): (
                   <RestroCard  resData={restaurant}/>
                   )
                  }
               </Link>
               ))},
                  {
                filterResturant.map((restaurant)=>(
                  <Link key={restaurant.info.id} to={"/resturant/"+restaurant.info.id}>
                      {
                       restaurant.info.promoted? (
                       <RestroCardPromoted resData={restaurant}/>
                       ): (
                       <RestroCard  resData={restaurant}/>
                       )
                      }
                   </Link>
                   ))},
               {
                filterResturant.map((restaurant)=>(
               <Link key={restaurant.info.id} to={"/resturant/"+restaurant.info.id}>
                   {
                    restaurant.info.promoted? (
                    <RestroCardPromoted resData={restaurant}/>
                    ): (
                    <RestroCard  resData={restaurant}/>
                    )
                   }
                </Link>
                ))},
                  {
              filterResturant.map((restaurant)=>(
                <Link key={restaurant.info.id} to={"/resturant/"+restaurant.info.id}>
                    {
                     restaurant.info.promoted? (
                     <RestroCardPromoted resData={restaurant}/>
                     ): (
                     <RestroCard  resData={restaurant}/>
                     )
                    }
                 </Link>
                 ))},
                  {
               filterResturant.map((restaurant)=>(
                <Link key={restaurant.info.id} to={"/resturant/"+restaurant.info.id}>
                    {
                     restaurant.info.promoted? (
                     <RestroCardPromoted resData={restaurant}/>
                     ): (
                     <RestroCard  resData={restaurant}/>
                     )
                    }
                 </Link>
                 ))},
              
                {/* <RestroCard 
                resName="Sakshi foods"
                cuisine="Biriyani, NorthIndian, Asian"
                star="4.5 stars"
                minute='20 minute'
                />

                <RestroCard 
                resName="KFC" 
                cuisine="Burger, pizza, chicken-lolipop"
                star="4.1 stars"
                minute ="30 minute"
                />
             */}

            </div>
        </div>
    )
}
export default Body