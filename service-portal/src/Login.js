import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { BrowserHistory } from 'react-dom'
import Regpage from './Registrationpage'

function regbutton() {
    console.log("clicked");    

    <Redirect to='/regpage' />
    
}

const Loginpage = () => {

    

    return (
        <div>
            < h1 > Login page</h1 >
            
            <button>
                <Link to='/regpage'>regpage</Link> 
                 
            </button>
            
        </div>

)

}

export default Loginpage