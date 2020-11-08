import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';
import Login from './Login';

class Navigation extends Component {
    render() {
        return (
          <div className="containerFluid">

            <Navbar bg="dark" variant="dark" >
              <Nav className="mr-auto">
                <Nav.Link ><NavLink exact activeStyle={{color:"green"}} to="/">Home</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:"green"}} to="/Page1">Page1</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:"green"}} to="/Page2">Page2</NavLink></Nav.Link>
                <Nav.Link ><NavLink exact activeStyle={{color:"green"}} to="/Page3">Page3</NavLink></Nav.Link>
                <Nav.Link ><NavLink  exact activeStyle={{color:"green"}} to="/Page4">Page4</NavLink></Nav.Link>
                <Nav.Link ><NavLink  exact activeStyle={{color:"green"}} to="/Page5">Page5</NavLink></Nav.Link>
              </Nav>
              <Form inline>
                <Button className="mr-sm-2" variant="outline-info"><Login></Login></Button>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>   
          </div>
        );
    }
}

export default Navigation;
