const express = require("express")
const User =require('../models/user')
const router =Router()


router.get('/signin', (req,res)=>{
    return res.render("signin")
})
router.get('/signup', (req,res)=>{
    return res.render("sigiup")
})

router.get('/signup', async(req,res)=>{

    const { fullName,email,password} = req.body;

    await User.create({
        fullName,
        email,
        password,
    })
    return res.redirect("/")
})


router.post('/signup')

module.export = router