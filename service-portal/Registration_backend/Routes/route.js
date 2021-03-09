
const express = require('express')
const router = express.Router()
const signupTemplatecopy = require('../models/Signup_model')


const bcrypt = require('bcrypt')
const { Redirect, Route } = require('react-router')


router.post('/login',async (req,res) => {
    //const { loginname , loginpassword } = req.body
    loginname = req.body.loginName
    loginpassword=req.body.loginPassword
    
    // signupTemplatecopy.find({
    //     'fullName':name
    // },{
    //     'email':1,'_id':0
    // })
    console.log(loginpassword + 'kkkkkkkkk');
    const user = await signupTemplatecopy.findOne({
        'fullName':loginname
    }).lean()

    if(!user){
        console.log('no user');
        return false; 
    }
    if(await bcrypt.compare(loginpassword,user.password)){
        console.log('yesssss');
        var a = 1;
        localStorage.setItem("ok",a)
        /// this this is remaining!!!!!
        
    }else{
        console.log('no');
         
    }
    
})
// router.get('/login',(req,res) => {
//     var email = 'a@gmail.com'
//     signupTemplatecopy.find({
//         'fullName':email
//     },{
//         'experience':1,'_id':0
//     })
//     .then(data => {
//         res.json(data)
//     })
//     .catch(error => {
//         res.json(error)
//     })

// })

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