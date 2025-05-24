import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
 
  return (
    <div className="bg-zinc-950 w-screen h-screen text-white flex justify-between px-20 py-10">
         
       <Create />
       <Read />

    </div>
  );
};

export default App;
