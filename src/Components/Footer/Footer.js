import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p className="copyright text-muted">Copyright © Your Website 2018</p>
                    </div>
                    </div>
                </div>
            </footer>
        );
    }
}