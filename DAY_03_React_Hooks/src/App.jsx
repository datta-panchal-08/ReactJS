import React, { useState } from 'react'

const App = () => {
  const [username,setUsername] = useState("Dattatray");

  let n = 12;
  let s = "Hello World";
  let b = false;
  let nu = null;
  let un = undefined;
  // let arr = [<h1>Hey i'm array</h1>,12,true,null,undefined,"hii"]
  let profiles = [
    { name: "Dattatray", age: 23 },
    { name: "Ganesh", age: 24 },
    { name: "Jivan", age: 76 }
  ]

  const updatedProfiles = profiles.map((ele, index) => {
    return (
      <div key={index}>
        <li>Name: {ele.name}</li>
        <li>Age: {ele.age}</li>
        <hr />
      </div>
    )
  })

  const handleSetUsername = () =>{
    setUsername("Ganesh");
    // console.log(username); // We Cannot Log the Username here if we did then we get the old value if we want to show the updated value in username
    //because the setUsername method is asynchronusly perform the task for changing the username
    // so we must have to print the username outside of the parent function 
  }

  console.log(username);
  

  return (
    <div>
      <h3>{n} : {typeof n}</h3>
      <h3>{s} : {typeof s}</h3>
      <h3>{b} : {typeof b}</h3>
      <h3>{nu} : {typeof nu}</h3>
      <h3>{un} : {typeof un}</h3>
      {/* <h3>{arr} : {typeof arr}</h3> */}
      <br />
     
     {updatedProfiles}

     <h3>UserName: {username}</h3>
     
     <button onClick={handleSetUsername}>Click to change the username</button>


    </div>
  )
}

export default App