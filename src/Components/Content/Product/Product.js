import React, { Component } from 'react'

export default class Product extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editting : false
    }
  }
  show_button = () => {
    if(this.state.editting === false) {
      return this.renderNornal();
    }else {
      return this.renderEditForm();
    }
  }

  buttonEdit = (flg) => {
    if(flg === true) {
      this.setState({
        editting : true
      })
    }else {
      this.setState({
        editting : false
      })
    }
  }
  renderNornal = () => {
    return <div className="btn-group">
              <button type="button" className="btn btn-sm  btn-danger" onClick={() => this.buttonEdit(true)}>Edit</button>
              <button type="button" className="btn btn-sm  btn-info">View</button>
            </div>;
  }
  renderEditForm = () => {
    return <div className="col-md-12" style={{margin:10}}>
              <div className="form-group">
                  <input defaultValue={this.props.name.trim()} type="text" className="form-control" id="usr" />
              </div>
              <div className="form-group">
                  <button className="btn btn-info btn-sm" onClick={this.buttonEdit.bind(this, false)}>Save</button>
              </div>
            </div>
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
            <img className="card-img-top" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%', display: 'block'}} src={this.props.image} data-holder-rendered="true" />
            <div className="card-body">
            <h3>{this.props.name}</h3>
            <p className="card-text">{this.props.summary}</p>
            <div className="d-flex justify-content-between align-items-center">
                { this.show_button() }
                <small className="text-muted">9 mins</small>
            </div>
            </div>
        </div>
        </div>   
    )
  }
}
