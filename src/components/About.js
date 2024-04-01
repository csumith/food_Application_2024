import React from 'react'
import User from './User'
import Userclass from './Userclass'

class About extends React.Component{
  constructor(){
    super()
    console.log('parentConstructor-render')
  }
  componentDidMount(){
    console.log("Parents-ComponentDidMount")
  }

  render(){
    console.log('parent-render')
    return(
      <div> 
        <User name= { "Sumit Chouhan function_base"}/>
      <Userclass name= {"first"} city ={"Nagpur"} contact={"8624885516"}/>
      <Userclass name= {"second"} city ={"Nagpur"} contact={"8624885516"}/>
      
      </div>
    )
  }
}



export default About

// 1.parentConstructor-render
// 2.parent-render
// 3.first constuctor called
// 4.first render called
// 5.second constuctor called
// 6.second render called
// 7.first componentDidMount
// 8.second componentDidMount
// 9.Parents-ComponentDidMount


