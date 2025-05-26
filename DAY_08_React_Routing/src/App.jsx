import React from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="bg-gray-800 text-white w-screen h-screen px-30">
      <Nav/>
      <MainRoutes/>
    </div>
  );
};

export default App;
