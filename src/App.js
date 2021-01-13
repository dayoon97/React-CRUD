import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      users:[]
    };
    this.addUser = this.addUser.bind(this);
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

  addUser = () => {
    this.setState(state => ({
      addname: <div className="name-input"><input type="text" placeholder="이름을 입력하세요" size="5"/></div>,
      //addname: <div className="name-input"><TextField required id="standard-required" label="Required" defaultValue="이름을 입력하세요" /></div>,
      addphone: <div className="phone-input"><input type="phone" placeholder="전화번호" size="10"/></div> ,
      addgender: <select><option>F</option><option>M</option></select>,
      sendBtn: <button className="submit-btn">전송하기</button>

    }));
  }


  render() {
    
    const user = this.state.users.map((item, index) => {
      return <tr key={index}><td><input type="checkbox"/></td><td>{item.No}</td><td>{item.Name}</td><td>{item.Phone}</td><td>{item.Gender}</td></tr>
    });

    return (
        <div className="App">
          <div className="cont-area">
          <div className="tbl-area">
            <table className="tbl">
              <tr>
                <th></th>
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
            <div className="btn-area">
            <button className="Addbtn" onClick={this.addUser}>추가하기</button>
            <button className="Delbtn">삭제하기</button>
            <button className="Updbtn">수정하기</button>
            </div>
            <div className="add-area">{this.state.addname}{this.state.addphone}{this.state.addgender}</div>
            <div className="submit-area">{this.state.sendBtn}</div>
            </div>
        </div>
    );
  };
}

export default App;