import React from 'react'
import {Link,Route} from 'react-router-dom'
import './Login.css'


const Login = () => {
    return (
        <div className='container-login'>
               
            
            <h1 className='text'>
                Email 
            </h1>
            <input type='email' className="box" placeholder='email'></input>

            <h1 className='text'>
                password 
            </h1>
            <input type='password' className="box" placeholder='password'></input>
            <p className='text-account'>
                Dont have a account? <Link to ='/regpageseeker' >click here </Link>  
                               
                
            </p>
            <Route render = {({history}) => (
                
                    <button className='signin' onClick={() => {history.push("/")}}>sign-in</button>                       
                    
                )} />
            
            
        
            

    
        
        </div>
    )
}

export default Login
