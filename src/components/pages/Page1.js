import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login';

class Page1 extends Component {
    render() {

        if(sessionStorage.getItem("userName")==null)
        {
            return <Redirect to ={Login}></Redirect>
        }

        else{
            return (
           
                <div>
                    
                    Home Page1
                </div>
            );}
//         return (
//             <>
// {/*             
//                 <h1> Page1</h1>
//                 <Toast>
//                 <Toast.Header>
//                     <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
//                     <strong className="mr-auto">Bootstrap</strong>
//                     <small>11 mins ago</small>
//                 </Toast.Header>
//                 <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
//                 </Toast>

//     <h1> <dataConsumer>

//                     {
//                         msg=>{
//                             return msg}
//                         }
                        
//                     </dataConsumer>
//                     </h1>  */}

                    
//             </>
//         );
    }
}

export default Page1;
