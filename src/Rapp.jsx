import React from 'react';
import {Route,Switch} from "react-router-dom";
import Rabout from './Rabout';
import Rcontact from './Rcontact';
import Rerror from './Rerror';
const Rapp=()=>{
    const Name=()=>{
        return(
        <>
        <h1>this is name</h1>
        </>
        );
    };
    return(
        
        <>
        <Switch>
            <Route exact path='/' component={Rabout}/>
            <Route exact path='/contact' component={Rcontact}/>
            <Route path='/contact/name' component={Name}/>
            <Route component={Rerror}/>
        </Switch>
        {/*<Rabout/>
        <Rcontact/>
        <Rerror/>*/}
        </>
    );
   
};
export default Rapp;