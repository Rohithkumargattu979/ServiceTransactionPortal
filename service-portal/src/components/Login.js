
import axios from 'axios'
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import './stylesheets/Login.css'
const Swal = require('sweetalert2')


class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id : 'empty'
        }
    }
    

    sign(){
        
         
        
        axios.get('http://localhost:4000/app/signupProfessional',{
            params :{
                loginEmail:document.getElementById('email').value,
                loginPassword:document.getElementById('password').value
            }
        })
        .then(Response => {
            if (Response.data == '-1') {
                Swal.fire({
                    title: 'wrongPass!',
                    text: 'Wrong password',
                    icon: 'error',
                    confirmButtonText: 'retry'
                  })
                
            }else if (Response.data == '-2') {
                Swal.fire({
                    title: 'Error!',
                    text: "User dosen't exist",
                    icon: 'error',
                    confirmButtonText: 'retry'
                  })
            }
            else if(Response.data){
                window.location.replace('/dashboard')
            }
            
            
            
        })
        
        
    
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
                
                    <button className='signin' onClick={this.sign} >sign-in</button>                       
                    
                )} />
                
            
            
        
            

    
        
        </div>
    )
}}

export default Login
