const express = require('express')
const mongoose = require('mongoose')

const SignupTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    }
})

mongoose.export = mongoose.model('seeker',SignupTemplate)
