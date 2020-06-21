import React from 'react';
import Child from './Zaid';
import Child2 from './Zaid2';

const Parent = (props) => {
    return (
        <div>
            <Child/>
            <Child2 />
        </div>
    )
}

export default Parent;