
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  const [show,setShow]=useState(false)

  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }

  const handleClick=()=>{
    setShow(!show)
  }
  return (
    <div className="App">
     {show &&
     <>
     <h1>{count}</h1>
     <button onClick={()=>increment()}>Increment</button> 
     <button onClick={()=>decrement()}>Decrement</button>
     </>
     
     }
     <button onClick={()=>handleClick()}>Show</button>
    </div>
  );
}

export default App;
