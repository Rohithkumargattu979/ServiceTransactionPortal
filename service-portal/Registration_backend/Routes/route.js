
const express = require('express')
const router = express.Router()
const signupTemplatecopy = require('../models/Signup_model')
const signupTemplatecopy2 = require('../models/Signup_model_customer')


const bcrypt = require('bcrypt')



router.post('/registeredProfessional',async (req,res) => {
   
    let loginemail = req.body.loginEmail.toString()
    let  loginpassword=req.body.loginPassword.toString()
    const user =  signupTemplatecopy.findOne({
        'email':loginemail
    }).lean()

    if(!user){
        console.log('no user');
        return false; 
    }
    else if(await bcrypt.compare(loginpassword,user.password)){
        console.log('yes');     
       
        
    }else{
        console.log('no');         
    }
    
})
router.get('/signupCustomer',async (req,res) => {
   
    let loginemail = req.body.loginEmail.toString()
    let  loginpassword=req.body.loginPassword.toString()
    signupTemplatecopy2.find({}
    ).exec((err,user) =>{
        if (err) {
            console.log('error getting users');
        }else{
            console.log('yesss');
            res.json(user);
            
        }
    })

    
    
})

router.post('/signupProfessional',async (request,response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securedPassword = await bcrypt.hash(request.body.password,saltPassword)

    const signedupUser = new signupTemplatecopy({
        fullName:request.body.fullName,
        email:request.body.email,
        phoneNo:request.body.phoneNo,
        gender:request.body.gender,
        occupation:request.body.occupation,
        password:securedPassword,
        experience:request.body.experience,
    })
    signedupUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})
router.post('/signupCustomer',async (request,response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securedPassword = await bcrypt.hash(request.body.password,saltPassword)

    const signedupUser = new signupTemplatecopy2({
        fullName:request.body.fullName,
        email:request.body.email,
        phoneNo:request.body.phoneNo,
        gender:request.body.gender,
        
        password:securedPassword
        
    })
    signedupUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})



module.exports = router;