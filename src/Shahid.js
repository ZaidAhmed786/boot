import React from 'react';
import Child from './Zaid';

const Parent = (props) => {

      return (
          <Child name={props.name} />
      );


}
export default Parent;