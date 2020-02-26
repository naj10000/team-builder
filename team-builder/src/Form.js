import React from 'react';
import { useState } from 'react';

export default function Form(props) {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChanges = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
        console.log(member);
      };
      const submitForm = (e) => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role:"" });
      };
    

    return (
        
         <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input 
            id="name" 
            type="text" 
            name="name" 
            placeholder="name" 
            onChange={handleChanges}
            value={member.name}
            />
            <label htmlFor="email">Email</label>
            <input 
            id="email" 
            type="text" 
            name="email" 
            placeholder="email" 
            onChange={handleChanges}
            value={member.email}
            />
            <label htmlFor="name">Role</label>
            <input 
            id="role" 
            type="text" 
            name="role" 
            placeholder="role" 
            onChange={handleChanges}
            value={member.role}
            />

            <button type="submit">Add Member</button>

    </form>
    
    )
}


