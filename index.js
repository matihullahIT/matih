const express = require("express")
const app = express();
const port = 2000;
app.listen(port)
app.get("/",(req,resp)=>{
    resp.send(`
    <script>
    fucntion a(){
        alert("java script is working")
    }
    <button onclick= a()>
    hello 
    </button>
    </script>
    `)
})