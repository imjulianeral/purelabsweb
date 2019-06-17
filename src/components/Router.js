import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Background from './Background';
import Home from './Home';
import Services from './Services';
import Products from './Products';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Background/>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/servicios" component={ Services } />
                    <Route exact path="/productos" component={ Products } />
                </Switch>
            </BrowserRouter>
        )
    }
}
