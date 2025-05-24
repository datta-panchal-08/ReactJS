import React from "react";

const Read = ({ todos , settodos }) => {

  const btncss = {
    backgroundColor:"green",
    borderRadius:"10px",
    padding:"5px",
    color:"white",
    fontWeight:"bold"
  }

  const rendertodos = todos.map((todo, i) => {
    return (
      <div key={todo.id}>
        {
          <li style={{color:todo.isCompleted ? "green":"red"}}>
            <b>
              {todo.title} | &nbsp;
              <span>
                <button style={btncss} onClick={() => deleteTodo(todo.id)}>Delete</button>
              </span>
            </b>
            <br />
          </li>
        }
      </div>
    );
  });

  const deleteTodo = (id)=>{
     alert(id)
    let updatedTodos = todos.filter((todo)=>{
      return todo.id !== id
     })

     settodos(updatedTodos)
  }

  return (
    <div>
      <h3>Pending Todos</h3>
      {rendertodos}
    </div>
  );
};

export default Read;
