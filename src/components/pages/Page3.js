
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login';


class Page3 extends Component {

    state={
        item: ""
    }

        componentDidMount(){
            fetch('https://react-practice-30a0e.firebaseio.com/item.json')
            .then(response=>response.json())
            .then(responseData=>{
                this.setState({item:responseData})
            });
        }
      
    render() {

    //     const mydata= this.state.item
    //    const data= mydata.map((list)=>{
    //         return <li>{list}</li>
    //     })




        for(var i in this.state.item) 

        {console.log(i  +" =" +this.state.item[i])

        }

        if(sessionStorage.getItem("userName")==null)
        {
            return <Redirect to ={Login}></Redirect>
        }

        else{
            return (
                <>
                    {i}={this.state.item[i]}
                      
                </>
            );}

       
    }
}

export default Page3;