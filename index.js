const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    return res.send("funcionando com sucesso")
})

app.listen(3030,()=>{
    console.log("server funcionando")
})

