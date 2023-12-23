import React from "react"; 
import ReactDom  from "react-dom";
import { Routes , Route  ,Link , useRoute , useRoutes, Navigate} from "react-router-dom";
import Signup from "./components/signup";
import Home from "./components/home";
import Login from "./components/log in";
import Info from "./components/info";
import ProtectedRoute from "./components/protectedRoute";

export default class  App extends React.Component {
  state= {
    isAuthorized:true

  }
  componentDidMount(){
    const token = localStorage.getItem("token");
    if(token){
      this.setState({isAuthorized : true})
      }
      
  }
  login = ()=>{
    window.localStorage.getItem("token")&&this.setState({isAuthorized:true}) ;
  }

  logout = ()=>{
    window.localStorage.removeItem('token');
    window.localStorage.removeItem("name");
      this.setState({isAuthorized:false})
    }

  render(){
    return (
      
    <div >
      <Routes>
        <Route index element={<Navigate to="/Login"/>}  />
        <Route path="/login" element ={this.state.isAuthorized? <Navigate to={"/dashboard"}/> : <Login login={this.login}/>} />

        <Route path="/dashboard" element ={<ProtectedRoute isAuthorized={this.state.isAuthorized} logout={this.logout}  />}>
          <Route index element={<Home/>} />
          <Route path="info" element={<Info/>} />
        </Route>
  
        <Route path="/register" element={<Signup/>}/>
        <Route path="*"  element={<h1>Page not found</h1>}/>
  
  
  
  
      </Routes>
  
  
  
    </div>
  
  
  
  
  );
}
}

// in function components
// const rotes = useRoutes([
  //   {index:true , element:<Navigate  to="/Login"/> },
  //   {path:"/login",element : isAuthorized ? <Navigate to={"/dashboard"}/> : <Login/>  },
  //   {path:"/dashboard",element :<ProtectedRoute isAuthorized={false} /> 
  //   , children:[
    //     { index:true, element:<Home /> },
    //     {path:"info" , element:<Info/>}
    
    //   ]},
    //   {path:'/register',element:<Signup/>},
    //   {path:"*" ,element:<h2>Page not found</h2>}
    
    // ])


    // {rotes}