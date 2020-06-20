import React from 'react'
import counterContext from './CounterContext';



const Child = () => {
let counterValue = React.useContext(counterContext)
console.log(counterValue);

return (

<div>

    <h1>this is first child</h1>
<h1>this is first child : {counterContext}</h1>
</div>

)

}
export default Child;