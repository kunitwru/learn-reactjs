import React, { Component } from 'react'
import './Home.css'
import Jumbotron from '../Jumbotron/Jumbotron';
import Product from '../Product/Product';
import Mydata from './data.json';

export default class Home extends Component {

  render() {
    return (
      <div>
       <Jumbotron />
       <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {Mydata.map((val, key) => {
              return <Product key={key} id = {val.id} name = {val.name} summary = {val.summary} image = {val.image} />
            })}
          </div>
        </div>
       </div>
      </div>
    )
  }
}
