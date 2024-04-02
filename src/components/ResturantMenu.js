import { useEffect,useState } from "react"
import Shimer from "./Shimer"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../../utils/constant"
import ReasturantCategory from "./ReasturantCategory"



const ResturantMenu=()=>{
    const [restroMenu,setrestroMenu] = useState([])
    const [category,setcategory] = useState([])
    // const [showitem,setshowitem]= useState(true) //lifting up state
    const [showindex,setshowindex]= useState() //lifting up state
      const params = useParams()
      console.log(params)
     const {restroID} = useParams()
    useEffect(()=>{
      fetchMenu()
    },[])

    const fetchMenu = async()=>{
        const data =await fetch(MENU_URL+restroID +"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        console.log("json", json)
        
        console.log("json =",json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
        setrestroMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards)
        setcategory(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        console.log('category',category)
    }
       


    const filter = category.filter((c)=> c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     console.log("filter=",filter)



    return restroMenu.length === 0 ?(<Shimer/>):(
    <div className="Menu-box bg-gray-100 rounded-lg p-8 shadow-md text-center ">
    <h1 className="text-3xl font-bold mb-4">Menu</h1>
    
    <ul>
        {
        restroMenu.map((item) => (
        <li key={item.card.info.id} className="border-b py-2">
        <span className="font-semibold">{item.card?.info?.name}</span>: ${((item.card?.info?.price || item.card?.info?.defaultPrice) / 100).toFixed(2)}
            </li>
        ))}

   {
    filter.map((listrestro,index)=>{ 
        //console.log(index)
        return<ReasturantCategory data={listrestro.card.card}
        showitem={index ===showindex ? true: false }
        setshowindex={()=>setshowindex(index)}
        />})
   }
   
   
    </ul>




</div>
    )
}

export default ResturantMenu