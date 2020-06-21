import React from 'react'
import counterContext from './CounterContext';



const Child = () => {
let counterValue = React.useContext(counterContext)
console.log(counterValue);

return (

<div>

    <h1>this is first child</h1>
<h1>this is first child : {counterValue}</h1>
<button onClick= {()=>{counterValue[1](++counterValue[0])}}>
    increment
</button>
</div>

)

}
export default Child;