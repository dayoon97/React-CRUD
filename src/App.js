import React from 'react';
import './App.css';

var nameValue = 0;

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

  updateName = (e) => {
    const nameId = e.target.id;
    const userphone = e.target.nextSibling.innerText;

    nameValue = nameId;

    //fetch('/api/name/update').then(req => data: {Name: nameId, Phone: userphone});

    // const userNameUpdate = (nameId, userphone) => ({
    //   request: {
    //     url: '/api/name/update',
    //     method: 'put',
    //     data: {Name: nameId, Phone: userphone}
    //   }
    // });

  



    this.setState(state => ({
      setName: <div className="user-name" id={nameId}><span className="name-list"><input type="text" size="5" className="nameinput"/></span></div>
    }));
    
  }



  render() {
    
    const userName1 = this.state.setName;

    const user = this.state.users.map((item, index) => {
      return <div className="user-area"><div className="user-no" key={index}><span className="cir">{item.No}</span></div>
      {nameValue === "name" + (index + 1) ? userName1 : <div className="user-name" id={"name" + (index + 1)} onClick={this.updateName}><span className="name-list">{item.Name}</span></div> }

      <div className="user-phone">{item.Phone}</div><div className="user-gender">{item.Gender === 'F' ? '👩' : '👨' }</div></div>
    });

    


    return (
        <div className="App">
          <div className="title-area"><h1>ReactJS CRUD</h1></div>
          <div className="cont-area">
          <div className="tbl-area">
            {user}
            </div>
            <div className="btn-area">
            {/* <button className="Addbtn" onClick={this.addUser}>추가하기</button>
            <button className="Delbtn">삭제하기</button>
            <button className="Updbtn">수정하기</button> */}
            </div>
            <div className="add-area">{this.state.addname}{this.state.addphone}{this.state.addgender}</div>
            <div className="submit-area">{this.state.sendBtn}</div>
            </div>
        </div>
    );
  };
}

export default App;