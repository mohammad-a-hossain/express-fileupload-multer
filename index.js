const express = require('express')
const multer =require('multer')


// declare a var for path
const UPLOADS_FOLDER ='./upload/'

// declare a var for multer object with a destination path
var upload = multer({
    dest: UPLOADS_FOLDER
})

const app =express()


// upload.single is a middleware
 app.post('/',upload.single('avatar'), (req,res)=>{
    res.send('this is for file upload')
}) 

//uploading mu multiple file declare array and num
/* app.post('/',upload.array('avatar',3), (req,res)=>{
    res.send('this is for file upload')
}) */

//uploading an object in field
/*  app.post('/',upload.fields([
 {name:'avatar', maxCount:1},
{name:'gallery', maxCount:2}
]),(req,res)=>{
    res.send('this is for multiple object file upload')
}) */
 

// if don't want to upload any file
/* app.post('/',upload.none(),(req,res)=>{
    res.send('there will no file upload only form data will pass')
}) */

app.listen(4000,()=>{
    console.log('this server is listening to the port of 4000')
})