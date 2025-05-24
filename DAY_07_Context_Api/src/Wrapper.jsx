import React, { createContext, useState } from 'react'

// We can create context by using createContext and use it anywhere
export const todocontext = createContext(null);


const Wrapper = (props) => {
    console.log(props);
 const [todos, settodos] = useState([
    { id: 1, title: "Kaam karle bhai!", isCompleted: false },
  ]);
  return (
    <todocontext.Provider value={[todos,settodos]}>
        {props.children}
    </todocontext.Provider>
)
}

export default Wrapper