import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Page1 from './Page1';



class Login extends Component {
     login=()=>{

        sessionStorage.setItem("userName", "Zahid");

        if(sessionStorage.getItem("userName")!=null)
        {
            return <Redirect to ={Page1}></Redirect>
        }

        
    
    }
    logout=()=>{
        sessionStorage.clear();
    }

    
    render() {

           if(sessionStorage.getItem("userName")!=null){
            return <button type="submit" onClick ={this.logout}>logout</button>
           }

           else{
            return (
                <div>
    
                    <button type="submit" onClick ={this.login}>login</button>
                    
                    
                </div>
            );

           }
        
        
    }
}

export default Login;