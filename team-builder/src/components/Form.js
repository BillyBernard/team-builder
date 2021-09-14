import React from "react";

export default function MemberForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Member Name
          <input
            type="text"
            name="name"
            placeholder="type a member name"
            onChange={onChange}
            value={values.name}
            />
        </label>

        <label>Email
          <input 
            type="email"
            name="email"
            placeholder="type an email"
            maxLength="30"
            onChange={onChange}
            value={values.email}
            />
        </label>

        <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="CEO">CEO</option>
            <option value="Janitor">Janitor</option>
            <option value="Associate">Associate</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}