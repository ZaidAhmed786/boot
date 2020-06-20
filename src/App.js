import React from 'react';
import './App.css';
import Parent from './parent';
import CounterContext from './createcontext.js';

function App() {
    return(
      <CounterContext.Provider value={22}>

      <div>

         <Parent/>


      </div>

      </CounterContext.Provider>
      
    );
  }
export default App; 
