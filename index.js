const express = require("express");
const app = express();
const port = 2000;
app.listen(port)
app.use(express.json())
app.get("/",(req,resp)=>{
    resp.send(`
    hello g its working now
    <script>alert("java script is working")</script>`)
    console.log(req.body)
})
app.post("/post",(req,resp)=>{
    let opt=req.body
resp.send("you can post");
console.log(opt);
})