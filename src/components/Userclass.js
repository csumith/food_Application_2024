 import React from "react"
class Userclass extends React.Component{
    //We are create state varible inside this.state={ } it is bigObject whenever we are updating state we have to use this.setState({})
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            count:0,
            count1:0
        }
        console.log(this.props.name+"constuctor called")
    }
     //This componentdidMount will called after the component will mounted on webpage
     //It is use for api call like in function component we use useEffect
    componentDidMount(){
        console.log(this.props.name+"componentDidMount")
        
    }
    render(){ 
        console.log(this.props.name+"render called")
        const {name,city,contact} = this.props
        const {count} = this.state
        const {count1} = this.state

        
        return(
            <div className="card-parent">

            <h2>Count:{count}</h2>
            <h2>Count1:{count1}</h2>

            <button onClick={()=>{
                //Never ever update state variable directly
                this.setState({
                    count:this.state.count+1,
                    count1:this.state.count1+2
                })
            }}>Increment-Count-class</button>
            <h3 className="card-child">Name:{name}</h3>
            <h3 className="card-child">City:{city}</h3>
            <h3 className="card-child">Contact:{contact}</h3>
    
        </div>
        )
    }
}
export default Userclass

//Note:- if i have 20 state inside this.state{} if i change 2 state variable so only that 2 state will change out of 20
//whenever class load over constructor will called then render called it means we are creating instance of class