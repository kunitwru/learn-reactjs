import React, { Component } from 'react'
import './Home.css'
import Jumbotron from '../Jumbotron/Jumbotron';
import Product from '../Product/Product';
import Mydata from './data.json';

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'addFlg' : false,
      'posts' : Mydata
    };
  }
  deletePost = (id) => {
      var arrayPost = this.state.posts;
      arrayPost.splice(id, 1);
      this.setState ({
        'posts' : arrayPost
      })
  }
  editNamePost = (id, name) => {
      var arrayPost = this.state.posts;
      var post = arrayPost[id];
      post['name'] = name;
      this.setState ({
        'posts' : arrayPost
      })
  }
  showAddForm = () => {
    this.setState({
      'addFlg' : true
    })
    console.log(this.state.addFlg);
  }
  addPost = () => {

  }

  render() {
    var addFlg = this.state.addFlg;
    
    return (
      <div>
       <Jumbotron />
       <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="row">
              <button onClick={this.showAddForm} className="btn btn-info">
                Thêm mới
              </button>
            </div>
            
            <div className="row">
            <form>
              <div className="form-group">
                <input className="form-control" name="name" />
              </div>
              <div className="form-group">
                <input className="form-control" name="image" />
              </div>
              <div className="form-group">
                <textarea name="summary" className="form-control" />
              </div>
            </form>
            </div>
            <div className="row">
            {Mydata.map((val, index) => {
              return <Product key={index} index= {index} edit = {(id, name) => { this.editNamePost(id, name) }} delete = {(id) => { this.deletePost(id) }} id = {val.id} name = {val.name} summary = {val.summary} image = {val.image} />
            })}
            </div>
          </div>
        </div>
       </div>
      </div>
    )
  }
}
