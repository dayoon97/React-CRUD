import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

let nameValue = '';
let oldName = '';

const ChangeName = () => {
    const [nameId, setNameId] = useState('');
    const [userName, setUserName] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios(
          "http://localhost:3000/api/list"
        );
        setUsers(result.data.rows);
      };
      fetchData();
    });
  
    const onClickName = e => {
      const nameId = e.target.parentNode.id;
      oldName = e.target.innerText;
      console.log("이름: ", oldName);
      console.log("아이디: ", nameId);

      nameValue = nameId;

    };

    const enterEvent = e => {
      console.log(e.target.value);
      let newName = e.target.value;

      axios.put('http://localhost:3000/api/modify/name', {
        newName: newName, oldName: oldName
      })
      .then(function (response){
        window.location.reload();
      })
      .catch(function(error) {
        console.log("오류");
      });
    };

    // const nameList = users.map((user, index) => (user.Name));
    // const phoneList = users.map((user, index) => user.Phone);
    // const noList = users.map((user, index) => user.No);
    // const genderList = users.map((user, index) => user.gender);

    return (
    <div className="App">
          <div className="title-area"><h1>ReactJS CRUD</h1></div>
          <div className="cont-area">
          <div className="tbl-area">
             {
              users.map(
                (user, index) => (
                  <div className="user-area"><div className="user-no" key={index}><span className="cir">{user.No}</span></div>
                  {nameValue === "name" + (index + 1) ? <div className="user-name" id={nameId}><span className="name-list"><input type="text" id="newName" size="5" className="nameinput" onKeyUp={enterEvent}/></span></div>
                  : <div className="user-name" id={"name" + (index + 1)}><span className="name-list" onClick={onClickName}>{user.Name}</span></div>}
                <div className="user-phone">{user.Phone}</div><div className="user-gender">{user.Gender === 'F' ? '👩' : '👨' }</div></div>))
             }
          </div>
          <div className="btn-area">
          </div>
          <div className="add-area"></div>
          <div className="submit-area"></div>
          </div>
         </div>
    );
  };


export default ChangeName;