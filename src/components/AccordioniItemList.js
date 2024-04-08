import React from 'react'
import { CDN_URL } from '../../utils/constant'

import { useDispatch } from 'react-redux'
import { addItem } from '../../utils/Cartslice'


const AccordioniItemList = ({item}) => {
  const dispatch = useDispatch();
  
  const handleAddItem=(items)=>{
    dispatch(addItem(items))
  }

   console.log('Accordionitem',item)
  return (
   <div>
    {
        item.map((items)=>(
        <div className="p-2 m-2  border-gray-300 border-b-2 text-left flex justify-between"  key={items.card.info.id}>
                
            <div className='w-9/12'>
                <div className='p-2'>
                <span >{items.card.info.name}</span>   
                <span > ₹{items.card.info.defaultPrice/100}</span>
                </div>
                <p className='text-xs p-2'>{items.card.info.description}</p>
            </div>
            
            <div className='w-2/12 p-2 '>
            <div className='absolute'>
                <button className='p-2 mx-16 rounded-lg bg-black text-white shadow-lg' onClick={()=>handleAddItem(items)} >Add +</button>
            </div>
                <img src={CDN_URL + items.card.info.imageId} className='w-40'/>
            </div>
     </div>
        ))
    }
   </div>
  )
}

export default AccordioniItemList