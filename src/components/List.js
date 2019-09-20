import React, {Component} from 'react';
import Card from './Card'

class List extends Component {
  render(){
    return(
      <div className="lists">
      <div className="list-header">
        <h3>{this.props.list.title}</h3>
      </div>

      </div>
    )
  }
}

export default List
