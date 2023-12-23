import React, { Component } from 'react'
import Container from '../container'

export default class Home extends Component {
  arr = [1, 2,3,4,5];
  state = {
    arrayOFRefs : this.arr.map((e)=>{
      return React.createRef()
    })
  }

    change = (id)=>{

      if(this.state.arrayOFRefs[id].current) return this.state.arrayOFRefs[id]?.current.focus()
      

    }


  render() {
    console.log(this.state.arrayOFRefs)
    return (
      
      <div>
        <div className="home-wrap">
           <Container>
            {this.state.arrayOFRefs.map((refs  , index)=>{
             return <input type="text" key={index} ref={refs} onChange={() => this.change(index +1 )} />
            })}
            {/* <input type="text" ref={this.inputRef1} onChange={this.changeInput}/>
            <input type="text" ref={this.inputRef2} onChange={this.changeInput2} />

             */}
        <h1>
            Home
        </h1>
        welcome {"user : "}
            
            </Container> 
        </div>
      </div>
    )
  }
}
// inputRef1 = React.createRef()
// inputRef2 = React.createRef()
// componentDidMount(){
//   this.inputRef1.current.focus()
// }
// changeInput2 = (e) =>{
//   this.secoundInputFocus()
//   this.setState({input2:e.target.value.length })
  
// }
// secoundInputFocus = ()=>{
//   if(Number(this.state.input2) <=  0 ){
//     console.log(Number(this.state.input2) )
//     this.inputRef1.current.focus()
//   }
  
// }
// changeInput = (e)=>{
//   if(e.target.value.length > 4 ){
//     this.inputRef2.current.focus()
//     return this.setState({input1:e.target.value.length})
//   } 


// } 
