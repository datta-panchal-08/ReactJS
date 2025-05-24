import react from 'react';

const App = () =>{

  const handleclick = () =>{
    alert("Working Properly!")
  }

 const handleParam = (msg) =>{
     alert(msg)
  }

    return(
      <>
       <div>
        Hi Working Properly
      </div>  
      <div>
         i used how to return multiple tags using empty fragments.
      </div>
      <button onClick={handleclick}>Click</button>
      <button onClick={()=>handleParam("Hello From Parameterized function")}>Print MSG</button>
      </>
     
    )
}

export default App;

//function call is replaced by it's return value and it's always returns html..
//We cannot write anything after return
//We can only return single data/entity/variable/value
//there must be a single return in a function and that must be last statement