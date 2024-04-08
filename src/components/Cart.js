import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccordioniItemList from './AccordioniItemList'
import { clearCart } from '../../utils/Cartslice'



const Cart = () => {
    const cartItm = useSelector((store)=>store.cart.items) //In this code i am subscribing small portion of store that is item
    // const store = useSelector((store)=>store) // here i am subscribing whole store so it reduce hte performance only subscribe the particular portion the portion you want
    // const cartItm = store.cart.items
    console.log(cartItm)
  const dispatch = useDispatch()
    const handleClearcart = ()=>{
    dispatch(clearCart())
    }
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
       <div className='w-6/12 m-auto border-black'>
        <div>
        <button 
        className='p-2 m-2 bg-black text-white rounded-lg '
        onClick={handleClearcart} >Clear Cart</button>
        </div>
       
        <AccordioniItemList item = {cartItm}/>
         {cartItm.length === 0 && <h1>The Cart is empty pls... Add Items to the cart!</h1>}
       </div>
    </div>
  )
}

export default Cart