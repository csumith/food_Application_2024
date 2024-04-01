import React from 'react'
import AccordioniItemList from './AccordioniItemList'


const ReasturantCategory = ({data,showitem,setshowindex}) => {
  
  console.log("data==",data)

  const handleClick = ()=>{
   setshowindex()
  }
  
 
  return (
    // header od Acordion
    <div>
      <div className="Menu-box w-6/12 mx-auto my-2 bg-gray-100 rounded-lg p-8 shadow-md text-center ">
       <div className='flex justify-between cursor-pointer' 
       onClick={handleClick}
       >
            <span className= "font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇</span>
            {/* Accordion body */}
       </div>
         { showitem  && <AccordioniItemList  item={data.itemCards}/>} 
        </div>
    </div>
   
    
  )
}

export default ReasturantCategory