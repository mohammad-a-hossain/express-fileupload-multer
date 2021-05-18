const express = require('express')

const app =express()

app.get('/',(req,res)=>{
    res.send('this is a sample express ')
})

app.listen(3000,()=>{
    console.log('this server is listening to the port of 4000')
})