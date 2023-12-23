import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../header'

export default class ProtectedRoute extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthorized ?
        <>
        <Header logout={this.props.logout} isAuthorized={this.props.isAuthorized}/>
        <Outlet/> 
        </> 
        : <Navigate to={'/login'}/>}
      </div>
    )
  }
}
