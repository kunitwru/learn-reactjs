import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Content.css';
import About from './About/About';
import Topics from './Topics/Topics';
import Home from './Home/Home';

export default class Content extends Component {
    render () {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
           </div>
        );
    }
 }
