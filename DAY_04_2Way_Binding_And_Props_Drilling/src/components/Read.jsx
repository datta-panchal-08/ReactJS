import React from 'react'

const Read = ({users}) => {

    const renderUser = users.map((user,i)=>{
        return <li key={i}>{user.name}</li>
    })
  return (
    <div>
        <h4>Render User</h4>
        <h5>{renderUser}</h5>
    </div>
  )
}

export default Read