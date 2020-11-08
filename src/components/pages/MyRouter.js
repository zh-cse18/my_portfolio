import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';


class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/Page1" component={Page1}></Route>
                    <Route path="/Page2" component={Page2}></Route>
                    <Route path="/Page3" component={Page3}></Route>
                    <Route path="/Page4" component={Page4}></Route>
                    <Route path="/Page5" component={Page5}></Route>
                    <Route component={NotFound}></Route>
                </Switch>

                
            </div>
        );
    }
}

export default Router;