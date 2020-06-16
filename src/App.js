import React, {useState} from 'react';
import C from './counter.js';
import './App.css';
function App() {
  let [count, setCount] = useState(1);
  let [isMorning , setMorning] = useState();
  return ( 
    <div className={'box  ${isMorning ? "day" : ""}'}>
      <h1>Day time = ${isMorning ? 'Morning' : 'Night'}</h1>
  <C counter={count} />
  <br/>
  <button onClick={() => setCount(count + 1)}>update counter</button>
  <button onClick={() => setMorning(!isMorning)}>update counter</button>
    </div>
  );
}

export default App;
