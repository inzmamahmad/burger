import React from 'react';
import topimg from './asset/top.jpg';
const Todolist=(prop)=>{
  
return (
<>
<div className='todo_style'>
<i className="fa fa-times" aria-hidden="true"  onClick={()=>{
    prop.onSelect(prop.id);
}}>+</i>
<li>{prop.text}</li>
</div>
</>
)
};
export default Todolist;