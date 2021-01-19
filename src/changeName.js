import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const ChangeName = () => {
    const [nameValue, setNameValue] = useState('');
    const [userName1, setUserName1] = useState('');
    const [userName, setUserName] = useState('');
    const [data, setData] = useState('');
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
  

    // const user = users.map(function(item, index){
    //   return <div className="user-area"><div className="user-no" key={index}><span className="cir">{item.No}</span></div>
    //   {nameValue === "name" + (index + 1) ? userName1 : <div className="user-name" id={"name" + (index + 1)} onClick={this.updateName}><span className="name-list">{item.Name}</span></div> }
        
    //   <div className="user-phone">{item.Phone}</div><div className="user-gender">{item.Gender === 'F' ? '👩' : '👨' }</div></div>
    // });
    


    return (
    <div className="App">
          <div className="title-area"><h1>ReactJS CRUD</h1></div>
          <div className="cont-area">
          <div className="tbl-area">
             {
               users.map(
                  (user, index) => (<div className="user-area"><div className="user-no" key={index}><span className="cir">{user.No}</span></div>
                  {nameValue === "name" + (index + 1) ? userName1 : <div className="user-name" id={"name" + (index + 1)} ><span className="name-list">{user.Name}</span></div> }
                   
                  <div className="user-phone">{user.Phone}</div><div className="user-gender">{user.Gender === 'F' ? '👩' : '👨' }</div></div>)
               )
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