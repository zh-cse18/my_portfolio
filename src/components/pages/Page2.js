import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Redirect } from 'react-router-dom';
import Login from './Login';


class Page2 extends Component {
    render() {


        
        if(sessionStorage.getItem("userName")==null)
        {
            return <Redirect to ={Login}></Redirect>
        }

        else{
            return (
                <Fragment>
                     <h1> Page2</h1>
                <Container>
                <Row bg="red">
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
                </Container>
                    
                </Fragment>
            );}
       
    }
}

export default Page2;