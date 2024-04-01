//Name import always user this bracket = {}
import { CDN_URL } from "../../utils/constant";

const RestroCard = (props)=>{

     const { resData } = props;

     
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

    return(
      <div className="rest-card m-4 p-4 w-[200px]  rounded-lg  bg-gray-100 hover:bg-gray-200 border border-solid">
      <img 
      className="restlogo rounded-lg" 
      alt="rest-logo" 
      src={CDN_URL+cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h5>{sla.slaString}</h5>
     </div>
    )
}

//Higher order component
 export const withPromoteLabel = (RestroCard) =>{
  return(props)=>{
   return(
    <div>
      <label class="bg-gray-800 text-white px-2 py-2 rounded-md absolute">Promoted</label>
      <RestroCard {...props}/>
    </div>
   ) 
  }
}

export default RestroCard