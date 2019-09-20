import React, {Component} from 'react'
import Preview from '../Preview'

class Home extends Component {
  newBoard = () => {
         const board = {
           title: "Trips to Take",
           background: "#80ffaa",
           createdAt: new Date()
         }
         this.props.createNewBoard(board)
       }
  render(){
    return(
      <div>
      <button onClick = {this.newBoard}>New Board</button>
      {Object.keys(this.props.boards).map(key => (
        <Preview
        key={key}
        board={this.props.boards[key]}
        />
      ))}
      </div>
    )
  }
}


export default Home
