import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [userdata, setuserData] = useState([
    { name: "Ankush", age: 32 },
    { name: "Mayuri", age: 19 },
    { name: "Dattatray", age: 23 },
  ]);

  return (
    <div>
      <Create setuserData={setuserData} />
      <hr />
      <Read users={userdata} />
    </div>
  );
};

export default App;
