import React, { Component } from "react";
import Container from "../container";
import { Await, Navigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import '../signup/masrer.css'
export default class Login extends Component {
  state = {
    password: "",
    email: "",
    isLooding:false,
    formData: [],
  };

  handleinput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  sehame = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required(),
  });
  handleSubmit =  (e) => {
    this.sehame
      .validate(
        {
          email: this.state.email,
          password: this.state.password,
        },
        { abortEarly: false }
      ).then((res)=>{
        console.log(res)
      this.props.login() 

        this.setState({isLooding : true})
      })

    e.preventDefault();
  };

  render() {
    return (
      <div className="login-wraper">
        <Container>
          <div className="login-info">
            <h3>Welcome to website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolorum eveniet culpa porro animi saepe.
            </p>
            <div className="user-inputs">
              <p>
                Email:
                <span>{this.state.email}</span>
              </p>

              <p>
                Passwoard:
                <span>{this.state.password}</span>
              </p>
              <p>
                stauts:
              </p>
            </div>
          </div>
          <form action="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email...."
              onChange={this.handleinput}
              value={this.state.email}
            />

            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password...."
              onChange={this.handleinput}
              value={this.state.password}
            />

            <button onClick={this.handleSubmit} type="submit">
              {this.state.isLooding?  "looding..." :  "Submit"}
              
            </button>

            
          </form>
        </Container>
       
       
      </div>
    );
  }
}


// validate using Api
//       .then(async (isValid) => {
//         if (isValid) {
//           this.setState({isLooding:true})
//           const  postData = await axios
//             .post("http://127.0.0.1:8000/api/login", {
//               email: this.state.email,
//               password: this.state.password,
//             })
//             .then((res) => 
//             {

//               if (res.status === 200) {
//                 window.localStorage.setItem("token" , res.data.data.token)
//                 window.localStorage.setItem("name" , res.data.data.user.name)
//                 this.props.login() 
//               }
        
              
//             })

//                    // this.setState({isDone:true})

//             .catch((err) => 
            
//             this.setState({islooding: false})
            
//             )
            
            
//             .finally(()=>{

//             })
//         }
//       })
//       .catch((err) => {
// console.log("error" , err)

//       });
