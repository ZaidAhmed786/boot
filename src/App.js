import React from 'react';
import './App.css';
import Parent from './parent';
import counterContext from './createcontext.js';

function App() {
    return(
      <counterContext.Provider value={22}>

      <div>

         <Parent/>


      </div>

      </counterContext.Provider>
      
    );
  }
export default App; 
