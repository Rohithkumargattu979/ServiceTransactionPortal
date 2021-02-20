const { Router, request, response } = require('express')
const express = require('express')
const router = express.Router()
const SignupTemplatecopy = require('../models/Signup_model')

router.post('/signup',(request,response) => {
    const signedupUser = new SignupTemplatecopy({
        fullName:request.body.fullName,
        email:request.body.email,
        phoneNo:request.body.phoneNo,
        gender:request.body.gender,
        occupation:request.body.occupation,
        password:request.body.password,
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