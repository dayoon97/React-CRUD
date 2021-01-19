import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import NameInput from './NameInput.js';

let TF = false;

const ChangeName = () => {
    const [nameId, setNameId] = useState('');
    const [userName, setUserName] = useState('');
    const [users, setUsers] = useState([]);

    
    let nameValue = '';

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
      console.log("아이디: ", nameId);

      nameValue = nameId;
      console.log(nameValue);

      TF = true;
      console.log(TF);

      // setUserName = <div className="user-name" id={nameId}><span className="name-list"><input type="text" id="newName" size="5" className="nameinput" /></span></div>;
      // let nameInput = <div className="user-name" id={"name" + (index + 1)}><span className="name-list" onClick={onClickName}>{user.Name}</span></div>;
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
                  {(TF === true) && (nameValue === "name" + (index + 1)) ? <div className="user-name" id={nameId}><span className="name-list"><input type="text" id="newName" size="5" className="nameinput" /></span></div>
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