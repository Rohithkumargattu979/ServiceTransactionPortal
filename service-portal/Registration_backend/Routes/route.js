
const express = require('express')
const router = express.Router()
const signupTemplatecopy = require('../models/Signup_model')


const bcrypt = require('bcrypt')



router.post('/login',async (req,res) => {
   
    let loginname = req.body.loginName.toString()
    let  loginpassword=req.body.loginPassword.toString()
    const user =  signupTemplatecopy.findOne({
        'fullName':loginname
    }).lean()

    if(!user){
        console.log('no user');
        return false; 
    }
    if(await bcrypt.compare(loginpassword,user.password)){
        console.log('yes');
        
       
        
    }else{
        console.log('no');
         
    }
    
})

router.post('/signup',async (request,response) => {

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



module.exports = router