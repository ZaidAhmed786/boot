import React, {useState} from 'react';
import C from './counter.js';
function App() {
  let [count, setCount] = useState(1);
  let [morning, setmorning] = useState(false);

  return ( 
    
    <div className={`box ${morning ? 'day' : ''}`}>
      <h1>Day time = {morning ? 'morning' : 'night'}</h1>
  <C counter={count} />
  <br/>
  <button onClick={() => setCount(count + 1)}>update counter</button>
  <button onClick={() => setmorning(!morning)}>update counter</button>
    </div>
  ); 
  }
export default App; 
