import React from 'react';

export default function Member(props) {
    const { details } = props

    if (!details) {
        return <h3>Working fetching your team member&apos;s details...</h3>
      }

      return (
        <div className='member container'>
          <h2>Name: {details.memberName}</h2>
          <p>Email: {details.memberEmail}</p>
          <p>Role: {details.memberRole}</p>
        </div>
      )
    }
