import React from 'react'
import {Route,Redirect} from 'react-router-dom'
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();

var token = document.cookie.split('=')[1];



export function ProtectedRouteCustomer({component:Component,...rest}) {
    
     
    return (
        <Route 
        {...rest}
        render = {(props) => {           
            console.log("this is token" + token);
            console.log("thsi is the secret key" + process.env.PRIVATE_KEY_JWT)            
            if(token){                
                jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
                    console.warn("this is the decoded token" + decodedToken.type);
                    if (err) {
                        return <Redirect to ={{pathname:'/',state : props.location}} />
                    }else{
                        
                        if (decodedToken.type == 'customer') {
                            console.log("hellll yeahhhh");
                            return <Component {...props} />    
                        }else{
                            console.log("hell noooooo");
                            return window.location.replace('/');
                        }
                        
                    }
                })
                
            }else{
                return <Redirect to ={{pathname:'/',state : props.location}} />
            }
        }}
        />
    )
}
export function ProtectedRouteProfessional({component:Component,...rest}) {
    
     
    return (
        <Route 
        {...rest}
        render = {(props) => {           
            console.log("this is token" + token);
            console.log("thsi is the secret key" + process.env.PRIVATE_KEY_JWT)
            
            if(token){                
                jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
                    console.warn("this is the decoded token" + decodedToken.type);
                    if (err) {
                        return <Redirect to ={{pathname:'/',state : props.location}} />
                    }else{
                        
                        if (decodedToken.type == 'professional') {
                            console.log("hellll yeahhhh");
                            return <Component {...props} />    
                        }else{
                            console.log("hell noooooo");
                            return window.location.replace('/');
                        }
                        
                    }
                })
                
            }else{
                return <Redirect to ={{pathname:'/',state : props.location}} />
            }
        }}
        />
    )
}
