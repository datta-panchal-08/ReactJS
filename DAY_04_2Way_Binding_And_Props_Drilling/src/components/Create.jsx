import React, { useState } from 'react'

const Create = ({setuserData}) => {
     const [fullName,setFullName] = useState("");
  const [age,setAge] = useState("");

  console.log(fullName,age);

  const submitHandler = (e) =>{
    e.preventDefault();
    const newUser = {fullName,age};
    console.log(newUser);
    setuserData({name:fullName,age:age});
  }
  return (
    <div>
         <h4>Register User</h4>
       <form onSubmit={submitHandler}>
        <input type="text"  onChange={(e)=>setFullName(e.target.value)} value={fullName} placeholder='UserName' />
        <input type="text"  onChange={(e)=>setAge(e.target.value)} value={age} placeholder='Age' />
        <button>Submit</button>
       </form>
    </div>
  )
}

export default Create