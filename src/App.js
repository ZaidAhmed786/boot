import React, {useState} from 'react';
import C from './counter.js';
function App() {
  let [count, setCount] = useState(1);

  return ( 
    <div>
  <C counter={count} />
  <br/>
  <button onClick={() => setCount(count + 1)}>update counter</button>

    </div>
  );
}

export default App;
