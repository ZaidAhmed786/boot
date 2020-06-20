import React from 'react';
import './App.css';
import Parent from './Shahid';
import CounterContext from './CounterContext';

function App() {
    return(
      <CounterContext.Provider value={23}>
      <div>
        <Parent  />
      </div>
      </CounterContext.Provider>
    )
      }
export default App; 
