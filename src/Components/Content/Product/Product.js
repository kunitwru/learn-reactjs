import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
      console.log(this.txtName.value);
    }
  }

  convert_to_slug = (str) =>
  {
      // Chuyển hết sang chữ thường
      str = str.toLowerCase();     
   
      // xóa dấu
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd');
   
      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z-\s])/g, '');
   
      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, '-');
   
      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, '');
   
      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, '');
   
      // return
      return str;
  }


  renderNornal = () => {
    return <div className="btn-group">
              <button type="button" className="btn btn-sm  btn-danger" onClick={() => this.buttonEdit(true)}>Edit</button>
              <Link className="btn btn-sm  btn-info" to={"/post/" + this.props.id + "/" + this.convert_to_slug(this.props.name)  + ".html"}> View </Link>
            </div>;
  }
  renderEditForm = () => {
    return <div className="col-md-12" style={{margin:10}}>
              <div className="form-group">
                  <input ref={(input) => {this.txtName = input}} defaultValue={this.props.name.trim()} type="text" className="form-control" id="usr" />
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
            <h3>
              <Link to={"/post/" + this.props.id + "/" + this.convert_to_slug(this.props.name) + ".html"}> {this.props.name} </Link>
            </h3>
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
