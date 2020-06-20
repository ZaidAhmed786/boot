import React , {useContext} from 'react';
import counterContext from './createcontext';



const Child = () => {
 let counterValue = useContext(counterContext)
 console.log(counterValue)

 return(
     <div>
 <h1>this is 1st child</h1>
 <h3>counter value is : {counterValue}</h3>
</div>
 );

}
export default Child;