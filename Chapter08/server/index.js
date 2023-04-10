const express = require("express")
const cors=require("cors")
const app=express()
const PORT=3000

// Allows connections from any source
app.use(cors())

// Parse the request's body as json
app.use(express.json())

/**
    Mirror REST operations. The server returns the same data sent.
 */

app.get("/api/test", (req, res)=>{
    let data=req.query
    res.jsonp(data)
})
app.post("/api/test", (req, res)=>{
    let data=req.body
    res.jsonp(data)
})
app.put("/api/test", (req, res)=>{
    let data=req.body
    res.jsonp(data)
})
app.delete("/api/test", (req, res)=>{
    let data=req.query
    res.jsonp(data)
})


// Launches the server in port 3000
app.listen(PORT, ()=>{console.log("Server listening in port " + PORT)})