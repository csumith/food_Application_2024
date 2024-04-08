import React from "react"
import { useState } from "react"

const User = ({name})=>{
    const [num,setnum] = useState(0)
return(
    <div className="card-parent">
        <h2>Count:{num}</h2>
        <button onClick={()=>{
            setnum(num+1)
        }}>Increment-Count-function</button>
        <h3 className="card-child">Name: {name}</h3>
        <h3 className="card-child">City:Dehradun</h3>
        <h3 className="card-child">Contact:8624885516</h3>

    </div>
)
}
export default User