const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "./public/index.html")
})

app.get("/config", (req,res) => {
    res.sendFile(__dirname + "/public/config.html")
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})