import React, { Component } from 'react'
import MyData from '../Home/data.json';

export default class Detail extends Component {
  render() {
    let pid =  parseInt(this.props.match.params.id, 10);

    return (
      <div>
        {
            MyData.map((val, key) => {
                if ( val.id === pid) {
                    return <div key = {key}><h1>{val.name}</h1><h2>{val.summary}</h2></div>
                }else {
                    return false;
                }
            })
        }
      </div>
    )
  } 
}
