import React from 'react'
import Usercontext from "../../utils/Usercontext"
import { useContext } from 'react'



const Grosary = () => {

  const {LoggedInUSer} = useContext(Usercontext)
  console.log(LoggedInUSer)
  

  return (
    <div>
    <h1 className='text-center'>grosary store</h1>
    <h1 className='text-center'>{LoggedInUSer}</h1>

    </div>
 

  )
}

export default Grosary