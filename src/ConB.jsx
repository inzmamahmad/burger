import React, { useContext } from 'react';
import conC from './ConC';
import {FirstName,LastName} from './Creatcontextapp';
const ConB=()=>{
    const fname= useContext(FirstName);
    const lname= useContext(LastName);
return(
<>
<h1>
my name {fname}{lname}
</h1>
</>
);
};
export default ConB;