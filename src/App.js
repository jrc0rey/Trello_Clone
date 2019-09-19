import React, {Component} from 'react';
import Board from './components/Board'
import data from './sampleData'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      boards: []
    }
  }
  componentDidMount(){
    this.setState({boards:data.boards})
  }
  updateState = () => {

  }
  render() {
    return (
      <div>
        {this.state.boards.map(board => (
          <Board board={board}/>
        ))}
    </div>
    );
  }
}

export default App;
