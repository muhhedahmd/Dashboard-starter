import React, { Component } from 'react'

export default class Info extends Component {
  constructor(props){
    super(props)
    this.state ={mystate:"" , counter:0 , prevcounter :0 }
    console.log(" 1 fom constructor")
  }
  
componentDidMount(){
  console.log(' 4 from mounting componentDidMount')
}

static getDerivedStateFromProps(nextProps, prevState){
 console.log(' 2 from get drived getDerivedStateFromProps >>> update 1 ' )
  console.log(prevState , nextProps)
  return
}

  getSnapshotBeforeUpdate(prevepropsstate , prevstatecomponent){
    console.log(' update >>> 3 get snapshot before update getSnapshotBeforeUpdate')
    console.log(prevstatecomponent.counter)
    return null;
  }


  shouldComponentUpdate(){
    console.log(" update >>> 2 from should update shouldComponentUpdate")
    // if(this.state.counter <1 )return false
    return true
  }

  componentDidUpdate(){
    console.log(" update >>>> 4 from did update componentDidUpdate")
  }
  componentWillUnmount(){
    console.log(" 5 from will unmount componentWillUnmount")
  }

  render() {
    console.log(" 3 drom render render update >> 3")
    return (
      <div>
        <h2>previos state of counter  {this.state.prevcounter}</h2>
        <h2>{this.state.counter}</h2>

        <button onClick={()=>{this.setState((prevstate)=>{
          return{counter:prevstate.counter+1}
          })}}> click</button>
        <h1>
            info
        </h1>
      </div>
    )
  }
}
