import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {

  show_info = () => {
      alert("Hello");
  }
  show_info_param = (msg) => {
    alert(msg);
  }


  render() {
    return (
      <div>
        <button onClick={this.show_info}>Show info</button>
        <button onClick={() => this.show_info_param("Pham Van Sinh")}>Button has param</button>
        <button onClick={this.show_info_param.bind(this, "Pham Van Sinh")}>Button has param</button>
      </div>
    )
  }
}
