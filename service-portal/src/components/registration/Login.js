import axios from 'axios'
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import '/ServiceTransactionPortal/service-portal/src/components/stylesheets/Login.css';



class Login extends Component {


    sign(){
        
         
        
        axios.get('http://localhost:4000/app/signupProfessional',{
            params :{
                loginEmail:document.getElementById('email').value,
                loginPassword:document.getElementById('password').value
            }
        })
        .then(Response => console.log(Response.data))
        
        
    
    }



    render(){
    return (
        <div className='container-login'>
               
            
            <h1 className='text'>
                Email 
            </h1>
            <input type='text' id = 'email' className="box" placeholder='email'></input>

            <h1 className='text'>
                password 
            </h1>
            <input id = 'password' type='password' className="box" placeholder='password'></input>
            <p className='text-account'>
                Dont have a account? <Link to ='/regpageseeker' >click here </Link>  
                               
                
            </p>
            <Route render = {({history}) => (

                    <button className='signin' onClick={() => {history.push("/ProfHome")}}>sign-in</button>                       

                    
                )} />
                
            
            
        
            

    
        
        </div>
    )
}}

export default Login
