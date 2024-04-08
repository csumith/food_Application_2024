import React from 'react'
import { useEffect,useState } from 'react'

const PrintData = ({newData})=>{
    console.log("propsData=",newData)
    const {title} = newData
    console.log(newData.title)
    return (
       
           
      
      <div className="card" key={newData.id}>
          
          <div className="card-body">
            
            
             <div className='imggg'>
             <img className="restlogo" alt="rest-logo" src={newData.thumbnail}/>
             </div>
            <h5 className="card-title">{newData.title}</h5>
            <p className="card-text">{newData.description}</p>
            <p className="price">${newData.price}</p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      
    
      
        
    )
}


   const New = () => {

    const [value,setvalue] = useState([])
    const [filterProduct,setfilterProduct] = useState([])
     const [searchText,setsearchText]= useState("")
     

    

    useEffect(()=>{
      fetchdata()
    },[])
    const fetchdata = async()=>{
        const data =await fetch("https://dummyjson.com/products")
        const json =await data.json()
         setvalue(json.products)
         console.log("value" ,value)
         setfilterProduct(json.products)
         
    }
  return (
    <div>

<div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e)=>{
                    setsearchText(e.target.value)
                    }}
                    />
                    <button className="search_btn" 
                    onClick={()=>{
                          value.filter((ele)=>{
                           return inputfilter = ele.brand.includes(searchText)
                          })
                        console.log(searchText)
                        setfilterProduct(inputfilter)
                    }} >Search</button>
                </div>

               
               
            </div>  

    
       {
        value.map((ele) => (
        <PrintData  newData={ele} />
      ))
    
       }
    </div>
  )
}

export default New