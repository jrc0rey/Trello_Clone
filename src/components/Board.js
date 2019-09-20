import React, {Component} from 'react';
import List from './List'
import data from '../sampleData'


class Board extends Component {
  state = {
    currentLists: [ ]
  }

componentDidMount(){
    this.setState({ currentLists: data.lists})
  }

createNewList = () => {
  const list = {
    id: Math.random(),
    title: 'my list',
    board: 300,
    createdAt: new Date()
  }
this.setState({currentLists: [ ...this.state.currentLists, list]})
}

    render(){
      return(
      <div className="list-wrapper">
        <button onClick={this.createNewList}>NewList</button>
        {Object.keys(this.state.currentLists).map(key => (
          <List key={this.state.currentLists[key].id}
            list={this.state.currentLists[key]}/>
        ))}

      </div>
      )
    }
}

export default Board
