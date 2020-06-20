import React from 'react';
import './App.css';
import Parent from './Shahid';
import CounterContext from './Zaid';

function App() {
    return(
      <CounterContext.Provider value={23}>
      <div>
        <Parent name='zaid' />
      </div>
      </CounterContext.Provider>
    )
      }
export default App; 
