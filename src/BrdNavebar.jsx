import React from 'react'; 
import BrgLogin from './BrgLogin';
import brands from './asset/brand1.PNG';
import meatimg from './asset/meat.jpg';
import { NavLink } from 'react-router-dom';

const BrdNavebar=()=>{
return(
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand" to="/"><img src={brands}></img> </NavLink>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
    
    <form class="form-inline my-2 my-lg-0">
    
      <button class="btn btn-outline-success mx-2 my-1 my-sm-0" type="submit"><NavLink class="page-link" 
      to="/" >Burger Builder</NavLink></button>
     <button class="btn btn-outline-success mx-2 my-1 my-sm-0" type="submit"><NavLink class="page-link" 
      to="/login" >Login</NavLink></button>
    </form>
    
</nav>
</>
);
}
export default BrdNavebar;