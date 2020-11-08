import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login';


class Page4 extends Component {
    render() {

        if(sessionStorage.getItem("userName")==null)
        {
            return <Redirect to ={Login}></Redirect>
        }

        else{
            return (
           
                <div>
                    
                    Home Page4
                </div>
            );
       
    
    }
}
}
export default Page4;