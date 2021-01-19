import React from 'react';
import './App.css';
import ChangeName from './ChangeName.js';


// var nameValue = 0;
// let userphone = "";
// let nameId = ""; 
// let a = "";
// let oldName = "";

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       users:[],
//       userphone: '',
//       nameId: ''
//     };
//   }

//   componentDidMount = () => {
//     fetch('/api/list')
//         .then(res => res.json())
//         .then(res => {
//           this.setState({
//           users: res.rows
//         });
//       });
//   };


//   updateName = (e) => {
//     userphone = "";
//     nameId = e.target.id;

//     console.log(nameId);
//     console.log(oldName);

//     if(!nameId === null || !nameId === ""){
//       userphone = nameId.nextSibling.innerText;
//       oldName = document.querySelector("#" + nameId).children[0].innerText;
//       console.log(userphone);
//       console.log(oldName);
//     }

//     nameValue = nameId;

//     this.setState(state => ({
//       setName: <div className="user-name" id={nameId}><span className="name-list"><input type="text" id="newName" size="5" className="nameinput" /></span></div>
//     }));
    
//   }


//   // componentDidUpdate = () => {
//   //   console.log("함수실행");
//   //   console.log("입력한 이름 : ", a);
//   //   console.log("폰 : ", userphone);
//   //   console.log("유저아이디 : ", nameId);

//   //   fetch('/modify/name', {
//   //     method: 'put',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify({
//   //       Name: nameId,
//   //       newName: a,
//   //       Phone: userphone,
//   //       completed: false,
//   //       }),
//   //     })
//   //     .then((res) => {
//   //       return res.json();
//   //     })
//   //     .then((data) => {
//   //       console.log(data);
//   //     });
//   // }




const App = () => {
  return <ChangeName />;
};

export default App;