import React from "react"
class Newclass extends React.Component{
    constructor(){
        super()
        this.state={
            infoObj:{
                //intially this value will taken once the api is fetch inside componentDidMount that api value is overwrite there
              name:"dumy",
             location:"dumylocation"

            }
        }
        console.log("Constructor Render")
    }

    async componentDidMount(){ 
        console.log("ComponentDidMount called")
   const data = await fetch("https://api.github.com/users/akshaymarch7")
   const json = await data.json()
   this.setState({
    infoObj:json,
   })
   console.log(json)
    }

    componentDidUpdate(prevProps,prevstate){
        
        console.log("Component is updated")
    }
    componentWillUnmount(){
        console.log("Component will mount called")
    }
    render(){
        console.log("render called")
        const {name,location,avatar_url} = this.state.infoObj
        
      return(
        <div className="cardParent">
            <div className="cardchild">
             <img alt="imageNot found" src={avatar_url}></img>   
            <h3>{name}</h3>
            <h3>{location}</h3>

            </div>
        
        </div>
      )
    }
}
export default Newclass