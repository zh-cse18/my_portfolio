import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login';

class Page5  extends Component {
    render() {

        if(sessionStorage.getItem("userName")==null)
        {
            return <Redirect to ={Login}></Redirect>
        }
           
        else{
                const countryName=['Bangladesh','India', 'Pakistan','USA']
                const listitem =countryName.map((mydata)=>{
                    return <option> {mydata }</option>
                    })
            return (
                <div>
                    <select className="m-2" >{listitem}</select>
                </div>
        );      
    }
 }
}
export default  Page5;