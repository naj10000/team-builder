import React from 'react';

export default function Members(props) {
    return (
        <div>
               
           {props.member.map(member => {
  
            return <ul key={member.id}>
              <li>Name: {member.name}</li>
              <li>Email: {member.email}</li>
              <li>Role: {member.role}</li>
            </ul>
})}
     
        </div>
    )
}
