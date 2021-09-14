import './App.css';
import React, { useState } from 'react';
import Form from "./components/Form";
import TeamMember from './components/TeamMember';

// const memberList = [
//   {memberName: 'Billy', memberEmail: 'billy@google.com', memberRole: 'President'}
// ];

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [teamMember, setTeamMember] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {

    const newMember = {
      memberName: formValues.name.trim(),
      memberEmail: formValues.email.trim(),
      memberRole: formValues.role
    }

    if (!newMember.memberName) {
      setError("type username");
    } else if (!newMember.memberEmail){
      setError("type email");
    } else if (!newMember.memberRole) {
      setError("type role")
    } else {
      setError("");
    }

    if (!error) {
    setTeamMember(teamMember.concat(newMember));
    setFormValues(initialFormValues);
    }
  }
  return (
    <div className="App">
      <h1>Form</h1>
      <Form
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />

      {
        teamMember.map(member => {
          return (
            <TeamMember key={member.id} details={member}/>
          )
        })
      }

    </div>
  );
}

export default App;
