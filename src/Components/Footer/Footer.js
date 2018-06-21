import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <Link to="/top">Back to top</Link>
                    </p>
                    <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
                </div>
            </footer>
        );
    }
}