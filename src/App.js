import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      userNo:'',
      userPhone: '',
      userGender: ''
    };
  }

  componentDidMount() {
    fetch('api/list')
        .then(res=>res.json())
        .then(data=>this.setState({
          userName: data.userName,
          userNo: data.userNo,
          userPhone: data.userPhone,
          userGender: data.userGender
        }));
  }

  

  render() {
    const names = () => {
      const userName = this.userName;
    }
  
    const {userName, userNo, userPhone, userGender} = this.state;
    console.log("userName : " + userName);
    console.log("userNo : " + userNo);
    console.log("userPhone : " + userPhone);
    console.log("userGender : " + userGender);
    // for(var i = 0; i < userName.size; i++){
    //       return <td>{userName}</td>;
    // }

    //console.log("userName : ", userName);
    //const NameList = userName.map((name) => (<td>{name}</td>));

    // const NoList = userNo.map(
    //   (No) => (<td>{No}</td>)
    // );

    // const PhoneList = userPhone.map(
    //   (Phone) => (<td>{Phone}</td>)
    // );

    // const GenderList = userGender.map(
    //   (Gender) => (<td>{Gender}</td>)
    // );

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
              <tr>
                {userName.map((name, index) => (
                  <td key={index}>{name}</td>
                  ))}
              </tr>
              </tbody>
            </table>
        </div>
    );
    ;
  }
}

export default App;