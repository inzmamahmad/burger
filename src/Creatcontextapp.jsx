import React, { createContext } from 'react';
import conA from './ConA';
const FirstName= createContext();
const LastName= createContext();
const Creatcontextapp=()=>{
return(
<>
<FirstName.Provider value={"thapa"}>
    <LastName.Provider value={"technical"}>
        <conA/>
    </LastName.Provider>
</FirstName.Provider>


</>
);
};
export default Creatcontextapp;
export {FirstName,LastName};