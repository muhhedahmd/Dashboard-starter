import React, { Component } from 'react'
import anime from 'animejs'
import './style.css'
import Container from '../container'
export default class AnimeTodo extends Component {
    state={
        selectColor:"",

    
    }
    selectColorFormLi=(e)=>{
        const {backgroundColor} = e.target.style
        this.setState({selectColor: backgroundColor}) 
        console.log(e.target.style)

    }





  render() {
    return (
      <section 
      className='anime-sec'
      >
        <Container>
            
        <div id="wrapper">

        <div className="side">
        <ul>
            <li >
        <button type='button' onClick={(e)=>{console.log(e.target.style.cssText)}}>a</button>
            </li>
            <li >
            <button type='button' onClick={this.selectColorFormLi}></button>

            </li>
            <li >
            <button type='button' onClick={this.selectColorFormLi}></button>

            </li>
            <li >
        <button type='button' onClick={this.selectColorFormLi}></button>
                
                </li>
        </ul>
        </div>
        <div className="content">
            <form action="">
            <input type="text" placeholder='Enter the title' />
            <textarea name="" id="" cols="" rows="">
 
            </textarea>
            <button type="submit" >submit</button>

            </form>
        </div>

        </div>
            
            </Container>



      </section>
    )
  }
}
