
import './App.css';
import './parent.js';
import counterContext from './createcontext.js';

function App() {
    return(
      <counterContext.Provider value={22}>

      <div>

         <parent/>


      </div>

      </counterContext.Provider>
      
    );
  }
export default App; 
