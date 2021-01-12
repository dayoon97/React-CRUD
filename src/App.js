import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users:[]
    };
  }


  componentDidMount = () => {
    fetch('/api/list')
        .then(res => res.json())
        .then(res => {
          this.setState({
          users: res.rows
        });
      });
  };
  

  render() {
    
    const user = this.state.users.map((item, index) => {
      return <tr key={index}><td>{item.No}</td><td>{item.Name}</td><td>{item.Phone}</td><td>{item.Gender}</td></tr>
    });

    return (
        <div className="App">
            <table className="tbl">
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>전화번호</th>
                <th>성별</th>
              </tr>
              <tbody>
                {user}
              </tbody>
            </table>
        </div>
    );
    ;
  }
}

export default App;