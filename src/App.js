import './App.css';
import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
  const[usersList,SetUsersList]=useState([]);
  const addUserHandler =(uName,uAge)=>{
    SetUsersList((prevUsersList)=>{
      return [...prevUsersList,{name: uName, age: uAge}]
    });
  }
  return (
    <div>
 <AddUser onAddUser ={addUserHandler}/>
 <UserList users = {usersList}/>
    </div>
  );
}

export default App;
