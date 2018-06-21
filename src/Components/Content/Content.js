import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Content.css';
import About from './About/About';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import Contact from './Contact/Contact';

export default class Content extends Component {
    render () {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/lien-he" component={Contact} />
                <Route path="/post/:id/:slug.html" component={Detail} />
           </div>
        );
    }
 }
