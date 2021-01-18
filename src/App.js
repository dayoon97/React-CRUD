import React from 'react';
import './App.css';

var nameValue = 0;
let userphone = "";
let nameId = ""; 
let a = "";
let oldName = "";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users:[],
      userphone: '',
      nameId: ''
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

  updateName = (e) => {
    userphone = "";
    nameId = e.target.id;

    console.log(nameId);
    console.log(oldName);

    if(!nameId === null || !nameId === ""){
      userphone = nameId.nextSibling.innerText;
      oldName = document.querySelector("#" + nameId).children[0].innerText;
      console.log(userphone);
      console.log(oldName);
    }

    nameValue = nameId;

    this.setState(state => ({
      setName: <div className="user-name" id={nameId}><span className="name-list"><input type="text" id="newName" size="5" className="nameinput" onKeyUp={this.enterkey}/></span></div>
    }));
    
  }


  // componentDidUpdate = () => {
  //   console.log("함수실행");
  //   console.log("입력한 이름 : ", a);
  //   console.log("폰 : ", userphone);
  //   console.log("유저아이디 : ", nameId);

  //   fetch('/modify/name', {
  //     method: 'put',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       Name: nameId,
  //       newName: a,
  //       Phone: userphone,
  //       completed: false,
  //       }),
  //     })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }


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
            </div>
            <div className="add-area">{this.state.addname}{this.state.addphone}{this.state.addgender}</div>
            <div className="submit-area">{this.state.sendBtn}</div>
            </div>
        </div>
    );
  };
}

export default App;