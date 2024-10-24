require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const PORT = process.env.PORT

/* 
    ? Cookies
    * a piece of data
    * set by web server
    * stored by web client
    * server sends it back to the client on every request
    
    ? Usefulness
    * tracking users
    * not secure
    
    ? Limitations
    * not secure
    * cross origin limitations

    ? Cookie Headers
    * request 'Cookie'
    * response 'Set Cookie'
*/

app.use(cookieParser())
app.get("/", (req, res) => {
    res.cookie("cohort", "ptsb-aug-2024")
    res.send('Congrats! You just sent a cookie')
})

app.get("/getcookie", (req, res) => {
    console.log(req.cookies)
    res.send(`You're in /getcookies route`)
})

app.get("/deletecookies", (req, res) => {
    res.clearCookie("cohort")
    res.send(`Cleared yo cookies!`)
})

app.listen(PORT, () => {
    console.log(`[server] running on ${PORT}`)
})

/* 
    ? Challenge
    * setup counter cookie
    * create an endpoint to increment it
    * create an endpoint to decrement it
    * create an endpoint to see the total
*/