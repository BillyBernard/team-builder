import './App.css';
import React, { useState } from 'react';
import Form from "./components/Form";

const memberList = [
  {memberName: 'Billy', memberEmail: 'billy@google.com', memberRole: 'President'}
];

const initialFormValues = {
  memberName: '',
  memberEmail: '',
  memberRole: '',
}


function App() {
  const [teamMember, setTeamMember] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {

    const newMember = {
      memberName: formValues.memberName.trim(),
      memberEmail: formValues.memberEmail.trim(),
      memberRole: formValues.memberRole
    }

    if (!newMember.memberName || !newMember.memberEmail || !newMember.memberRole) {
      return;
    }

    setTeamMember([...teamMember]);
    setFormValues(initialFormValues);

  }
  return (
    <div className="App">
      <Form
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />
    </div>
  );
}

export default App;
