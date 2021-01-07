import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName:null,
      userNo:null
    };
  }

  componentDidMount() {
    fetch('api/list')
        .then(res=>res.json())
        .then(data=>this.setState({
          userName:data.userName,
          userNo:data.userNo
        }))
        console.log(this.userName);
        console.log(this.Name);
        console.log(this.userNo);
  }

  render() {
    const {userName, userNo} = this.state;
    return (
        <div className="App">
          <header className="App-header">
          {userName ? `Hello ${userName}` : 'Hello World'}
          </header>
        </div>
    );
    ;
  }
}

export default App;