import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import Form from './Form.js';
import './App.css';

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: 'Naj',
    email: `naj10000@live.com`,
    role: 'boss'

  }]);

  const addNewMember = member => {
    const newMember = {
      
      name: member.name,
      email: member.email,
      role: member.role
    };
    console.log(newMember)
    setMembers([...members, newMember]);
  };

  return (
    <div>
      <Form members={members} addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
