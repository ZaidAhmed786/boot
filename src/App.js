import React, {useState} from 'react';
import C from './counter.js';
function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true);

  return ( 
    
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day time = {isMorning ? 'morning' : 'night'}</h1>
  <C counter={count} />
  <br/>
  <button onClick={() => setCount(count + 1)}>update counter</button>

  <button onClick={() => setMorning(!morning)}>update day</button>
    </div>
  ); 
  }
export default App; 
