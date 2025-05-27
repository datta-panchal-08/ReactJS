import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='px-30  py-3 bg-zinc-700 text-white w-screen h-screen overflow-y-auto'>
      <Nav/>
     <Mainroutes/>    
    </div>
  )
}

export default App