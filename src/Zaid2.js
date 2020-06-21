import React, {useReducer} from 'react';
import HadiReducer from './HadiReducer';

const Child2 = () => {

let [state , dispatch] = useReducer(HadiReducer,10)

return (

<div>
<h1>value of reducer is :  {state}</h1>
<button onClick = {()=>dispatch('INCREMENT')}>increment Reducer</button>
</div>

)





}
export default Child2;