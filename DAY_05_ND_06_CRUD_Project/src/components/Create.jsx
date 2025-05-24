import React, { useState } from 'react'
import { nanoid } from "nanoid";

const Create = ({todos,settodos}) => {
     const [title, settitle] = useState("");
  const [completed, setcompleted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: completed,
    };

    let copytodos = [...todos];
    copytodos.push(newTodo);
    settodos(copytodos);

    // another way of doing the same process in one line
    // settodos([...todos],newTodo)
    settitle("");
  };
  return (
    <div>   <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Title"
        />
        <br />
        <input
          type="checkbox"
          onChange={(e) => setcompleted(e.target.checked)}
        />{" "}
        Completed
        <br />
        <button>Create Todo</button>
      </form></div>
  )
}

export default Create