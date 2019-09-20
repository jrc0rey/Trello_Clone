import React, {Component} from 'react';
import Board from './components/Board'
import data from './sampleData'
import Home from './components/pages/home'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      boards: []
    }
  }
  componentDidMount(){
    this.setState({boards:data.boards})
    console.table(data.boards)
  }

  createNewBoard = board => {
    this.setState({boards: [...this.state.boards, board]})
  }

  render() {
    return (
      <div>
        <Home boards={this.state.boards}
          createNewBoard={this.createNewBoard}/>
        <Board />
    </div>
    );
  }
}

export default App;
