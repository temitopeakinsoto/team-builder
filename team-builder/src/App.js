import React, { useState } from 'react';
import uuid from 'uuid'
import Form from './Form'

const teamMembers = [
  { 
    id: uuid(), 
    fullname: "Temitope Akinsoto", 
    email: "temitopeakinsoto@lambdaschool.com", 
    position: "Front-End Engineer"
  },
  { 
    id: uuid(), 
    fullname: "Justin Irabor", 
    email: "temitopeakinsoto@lambdaschool.com", 
    position: "Front-End Engineer"
  },
  { 
    id: uuid(), 
    fullname: "Oluwafemi Anjorin", 
    email: "temitopeakinsoto@lambdaschool.com", 
    position: "Front-End Engineer"
  },
  { 
    id: uuid(), 
    fullname: "David Kuseh", 
    email: "temitopeakinsoto@lambdaschool.com", 
    position: "Front-End Engineer"
  }
]

const initialFormValues = {
  fullname: "",
  email: "",
  department: ""
}

function App() {
  const [teamMembersList, setTeamMembersList] = useState(teamMembers);
  const [teamFormValues, setTeamFormValues] = useState(initialFormValues);

  const onChange = e => {
    setTeamFormValues({
      ...teamFormValues, 
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    // e.preventDefault();
    // const {fullname, email, department } = teamFormValues;
    // const newMember = {
    //   fullname,
    //   email,
    //   department
    // }
    // const newTeamMembersList = teamMembersList.concat(newMember);
    // setTeamMembersList(newTeamMembersList);
    // setTeamFormValues(initialFormValues);
  }
  return (
    <div className="App">
      <Form 
      onChange={onChange}
      onSubmit={onSubmit}
      teamFormValues={teamFormValues}
      />  

      {/* {
        teamMembers.map(teamMember => 
        <p>Hello</p>
        )
      } */}
      
    </div>
  );
}

export default App;
