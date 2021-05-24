import React, { useState } from 'react';

const BrgLogin=()=>{
  const [btnch,setbtnch]= useState("Login");
  const onbtnclick=(e)=>{
    
  if(btnch==="Login")
  {
    setbtnch("Register");
  }
  else{
    setbtnch("Login");
  }
}
    return(
<>
<div class="container">
  <div class="row">
    <div class="col-sm">
      
    </div>
    <div class="col-sm">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input  height="30px" width="250px" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div  height="30px" width="250px" class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div><br/>
  <div class="container">
  <div class="row">
    <div class="col-sm">
     
    </div>
    <div class="col-sm">
    <button type="submit" class="btn btn-primary text-center">Submit</button><br/><br/>
  <span type="submit" class="btn btn-primary text-center" onClick={onbtnclick}>{btnch}</span>
    </div>
    <div class="col-sm">
      
    </div>
  </div>
</div>

</form>
    </div>
    <div class="col-sm">
      
    </div>
  </div>
</div>

</>
    );
}
export default BrgLogin;