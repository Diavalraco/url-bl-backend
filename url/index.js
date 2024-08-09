const path = require("path")
const express = require("express")

const mongoose = require("mongoose")
const cookieParser = require('cookie-parser')

const app =express()

const PORT = 8000

mongoose.connect()

app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))


app.set('view engine','ejs')
app.set("views", path.resolve("./views"))

app.listen(PORT , () =>
console.log(`Server Started at PORT: ${PORT}`))