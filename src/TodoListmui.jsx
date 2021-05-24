import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const Todolistmui=()=>{
    const[item,setItem]=useState('');
    const itemEvent=(event)=>{
        setItem(event.target.value);
    };
    return(
<>
<div className="main_div">
    <div className="center_div">
    <br/>
    <h1>Todo List in mui</h1>
    <br/>
    <input type="text" placeholder='Add an Items' onChange="itemEvent"/>
    <Button className="newBtn"><AddCircleOutlineRoundedIcon/></Button>
    <ol>
        <li>{item}</li>
    </ol>
    <br/>
    </div>
    
</div>
</>
);
};
export default Todolistmui;