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
  const [teamMember, setTeamMember] = useState({})

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    
  }

  const submitForm = () => {
    
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
