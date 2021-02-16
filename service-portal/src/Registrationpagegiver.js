import React from "react";
import "./Registrationpagegiver.css"
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

const RegPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Write to us</p>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                            Your name :
                        </label>
                        <input type="text" id="defaultFormContactNameEx" className="form-control" />
                        <br />


                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                            Your email :
                        </label>
                        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                        <br />


                        <label for="phone"> phone number: </label>                        
                        <input type="tel"  pattern="[0-9]{10}" className="form-control" />
                        <br />


                        <label for="gender">gender:</label>
                        <select name="gender" id="gender" className="form-control">
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                            
                        </select>
                        
                            
                        <br />
                        
                        <br />

                        <label htmlFor="defaultExperience" className="grey-text">
                            password :
                             
                        </label>
                        <input type="password" name="password" id="password" onChange={check_pass} className="form-control" />
                        <br />
                        <label htmlFor="defaultExperience" className="grey-text">
                            conform password :
                             
                        </label>
                        <input type="password" name="confirm_password" id="confirm_password" onChange={check_pass} className="form-control" />
                        <span id='message'></span>
                        <br />

                        
                        <div className="text-center mt-4">
                            <MDBBtn color="warning" outline type="submit">
                                Sign up
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default RegPage;