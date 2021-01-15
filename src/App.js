import React from 'react';
import './App.css';

var nameValue = 0;
let userphone = "";
let nameId = ""; 
let a = "";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users:[],
      userphone: '',
      nameId: ''
    };
    this.upName = this.upName.bind(this);
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

  updateName = (e, a) => {
    userphone = "";
    nameId = e.target.id;

    this.componentDidMount(userphone, nameId);

    e.target.nextSibling.innerText === null? userphone = "암것도없음" : userphone = e.target.nextSibling.innerText;

    nameValue = nameId;


    this.setState(state => ({
      setName: <div className="user-name" id={nameId}><span className="name-list"><input type="text" id="newName" size="5" className="nameinput" onKeyUp={this.enterkey}/></span></div>
    }));
    
  }


  enterkey(e) {
    if(window.event.keyCode === 13) {
      a = document.getElementById("newName").value;
      console.log(nameId);
      console.log(userphone);
      console.log(a);
      this.upName();

    }
  }

  upName = () => {
    fetch('/modify/name', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: nameId,
        newName: a,
        Phone: userphone,
        completed: false,
        }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  } ;



  



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