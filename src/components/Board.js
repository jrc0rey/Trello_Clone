import React, {Component} from 'react';
import List from './List'

class Board extends Component {
    render(){
      return(
      <div>
      <h4>{this.props.board.title}</h4>

      </div>
      )
    }
}

export default Board
