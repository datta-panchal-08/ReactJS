import React, { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = () => {
   
  // we can use useContext for accessing the data fro
  const [todos,settodos] = useContext(todocontext);

  const rendertodos = todos?.map((todo, i) => {
    return (
      <div className="w-full py-3 px-3 rounded-md bg-black" key={todo.id}>
        {
          <li className="list-none w-full flex items-center justify-between">
             <p className="font-semibold w-[80%] text-orange-500">{todo.title}</p>
             
              <button className="text-red-600 font-semibold cursor-pointer"  onClick={() => deleteTodo(todo.id)}>Delete</button>
           
          </li>
        }
      </div>
    );
  });

  const deleteTodo = (id)=>{
    let updatedTodos = todos.filter((todo)=>{
      return todo.id !== id
     })
      
     settodos(updatedTodos);
     toast.error("Todo Deleted!");
  }

  return (
    <div className="w-[40%] flex flex-col gap-6 px-5">
      <h3 className="text-6xl"> <span className="text-pink-500">Pending</span> Todos</h3>
      {rendertodos}
    </div>
  );
};

export default Read;
