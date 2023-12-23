import React, { Component } from "react";
import "./masrer.css";
import * as yup from "yup";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Container from "../container";

const savedData = {};
const data = {
  name: "",
  email: "",
  password: "",
  repassword: "",
  checked: false,
};

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    repassword: "",
    checked: false,
    isLooding:false,
    data,
    errors: {
      errName: "",
      errEmail: "",
      errPassword: "",
      errRepassword: "",
      errChecked: false,
    },
    isDone:false
  };
  handleinput = (e) => {
    const { id, value, name, checked } = e.target;
    if (name === "checked") {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  };

  // start sechma yup validate
  schema = yup.object().shape({
    name: yup.string().max(16).min(6).required(),
    email: yup.string().email().required(),
    password: yup.string().max(10).min(6).required(),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
    checkbox: yup.boolean().oneOf([true], "You must agree to the terms"),
  });
componentDidMount(){
}
  handleSubmit = (e) => {

  this.setState({islooding:false})
    e.preventDefault();

    this.schema
      .validate(
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          repassword: this.state.repassword,
          checkbox: this.state.checked,
        },
        { abortEarly: false }
      )
      .then((isValid) => {
        if (isValid) {
          this.setState(() => {
            return {
                islooding:true,
              ...this.state.data,
            };
          });

          try {
            const postData = axios
              .post("http://127.0.0.1:8000/api/register", {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.repassword,
              })
              .then((res) =>
              {
                
                   console.log(res)  
                return(
                   this.setState({isDone:true})   
                   )
                })
                
                
                
                .catch(err =>console.log(err))
            console.log(postData , this.state.isDone);
          } catch (error) {
            console.log(error);
          }
        }
      })
      .catch((validationErrors) => {
        const errors = {};
        validationErrors.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        console.log(errors)
        this.setState({ errors });
      });

      console.log(this.state.isLooding)
  };

  render() {
    return (
      <div className="signup-wraper">
      <Container>

      <div className="signup-info">
        <h3>
          Welcome to website 
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum eveniet culpa porro animi saepe.</p>
          <div className="user-inputs">
            <p>name:
              <span>

               {this.state.name}
              </span></p>
            <p>Emial: 
              <span>
              {this.state.email}

              </span>
            
            </p>
            <p>Passwoard: 
              <span>

               {this.state.password}
              </span>
               </p>
            <p>repeat passwoard:
              <span>
              {this.state.repassword}
                </span> 
                </p>

          </div>
      </div>
      <form action="">
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name...."
          onChange={this.handleinput}
          value={this.state.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email...."
          onChange={this.handleinput}
          value={this.state.email}
        />

        <label htmlFor="password">New password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password...."
          onChange={this.handleinput}
          value={this.state.password}
        />

        <label htmlFor="repassword">repeat password</label>
        <input
          type="password"
          name="repassword"
          id="repassword"
          placeholder="passwoard..."
          onChange={this.handleinput}
          value={this.state.repassword}
        />

        <div className="checkbox">
          <input
            type="checkbox"
            name="checked"
            id="checked"
            onChange={this.handleinput}
            checked={this.state.checked}
          />
          <span>
            <i></i>&nbsp;I agree to the terms and conditions.
          </span>
        </div>

        <button onClick={this.handleSubmit} type="submit">
          {this.state.isLooding? "looding...." : "submit"}
          
        </button>
        {this.state.isDone ? <Navigate to={"/"}/>:""}
      </form>
      </Container>
      </div>
    );
  }
}
