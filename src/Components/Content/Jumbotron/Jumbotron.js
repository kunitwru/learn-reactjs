import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Jumbotron extends Component {
  render() {
    return (
        <section className="jumbotron text-center">
            <div className="container">
            <h1 className="jumbotron-heading">Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
                <Link to="#" className="btn btn-primary my-2">Main call to action</Link>
                <Link to="#" className="btn btn-secondary my-2">Secondary to action</Link>
            </p>
            </div>
        </section>
      
    )
  }
}
