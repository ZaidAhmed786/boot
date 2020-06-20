import React, { useContext } from 'react'
import CounterContext from './CounterContext';
import counterContext from './CounterContext';


const Child = (props) => {
let counterValue = useContext(counterContext)

return (

<div>

    <h1>this is first child</h1>
<h1>this is first child : {counterContext}</h1>
</div>

)

}
export default Child;