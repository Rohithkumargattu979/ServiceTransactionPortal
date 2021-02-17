import React from "react";
import "./Registrationpageseeker.css"
import { Route } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';


function check_pass() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
       
        
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
    
}

function submit_sucess() {
    if (document.getElementById('message').innerHTML == 'matching') {
        window.location.assign('/login');
    } else {
        window.location.assign('/regpagegiver');
    }
}

const RegPage = () => {
    return (
    <div className='background'>
        
            <form className='container'>
                <p className="h4 text-center mb-4">Registration</p>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                    Your name :
                </label>
                <input type="text" id="defaultFormContactNameEx" className="form-control" placeholder='full name'/>
                <br />


                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                    Your email :
                </label>
                <input type="email" id="defaultFormContactEmailEx" className="form-control" placeholder='(eg: rahul@gmail.com)'/>
                <br />


                <label htmlFor="phone no" className='grey-text'> 
                    phone no :
                </label>                        
                <input type="tel"  pattern="[0-9]{10}" className="form-control" placeholder='10-digit number' />
                <br />

                <label htmlFor="gender" className='grey-text'>
                    gender :
                </label>
                &nbsp;&nbsp;
                <select name="gender" id="gender" className="form-control">
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                    
                </select>                    
                    
                <br />


                <label for="occupation" className='grey-text'>occupation :</label>
                <select name="occcupation" id="occupation" className="form-control">
                    <option value="carpenter">carpenter</option>
                    <option value="tutor">tutor</option>
                    <option value="other">other</option>

                </select>
                <br />
               

                <label htmlFor="defaultExperience" className="grey-text">
                    password :
                        
                </label>
                <input type="password" name="password" id="password" onChange={check_pass} className="form-control" />
                <br />
                <label htmlFor="defaultExperience" className="grey-text">
                    conform password :
                        
                </label>
                <input type="password" name="confirm_password" id="confirm_password" onChange={check_pass} className="form-control" placeholder='same as password'/>
                <span id='message'></span>
                <br />



                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                    Experience :
                </label>
                
                <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="2" placeholder='brief bio' />
                <br />
                <Route render={({ history }) => (
                    <button className='signup' onClick={() => { if (document.getElementById('message').innerHTML == 'matching') { history.push('/') } }}>
                        sign-up
                    </button>
                )} />   
            </form>
        
    </div>
                
    );
};

export default RegPage;