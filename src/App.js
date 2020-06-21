import React,{ useState } from 'react';
import './App.css';
import Parent from './Shahid';
import CounterContext from './CounterContext';

function App() {
  countState = useState(1)
  //let [count, setCount] = useState(9)
    return(
      <CounterContext.Provider value={countState}>
      <div>
        <Parent  />
      </div>       
      </CounterContext.Provider>
    );
      }
export default App; 
