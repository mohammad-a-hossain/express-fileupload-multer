const express = require('express')
const multer =require('multer')
const path = require('path')


// declare a var for path
//const UPLOADS_FOLDER ='./upload/'

// declare a var for multer object with a destination path
/* var upload = multer({
    dest: UPLOADS_FOLDER
}) */
// server validation

//const app =express()


// upload.single is a middleware
/*  app.post('/',upload.single('avatar'), (req,res)=>{
    res.send('this is for file upload')
}) 
 */
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
//--------------------------------------------------------------------------
// validation part 


const UPLOAD_FOLDER = './upload' // declaring file path
// all validation goes here 

/* var upload=multer({
 dest:UPLOAD_FOLDER,
 limits:{fileSize:10000},//if file is large >10kb error file large

 fileFilter:(req,file,cb)=>{ // if file is not jpg or jpeg or png

     if(file.mimetype ==='image/png' || file.mimetype === 'image/jpeg' || file.mimetype ==='image/jpg'){
         cb(null,true)
     }else{
         cb(new Error ('only jpeg png or jpg file allowed'))
     }
 },
}) */

 // defined storage validation

 const storage =multer.diskStorage({// making a storage object for storing controll file name and extn
     destination:(req,file,cb)=>{
    cb(null,UPLOAD_FOLDER)// folder path
     },
     filename:(req,file,cb)=>{// generate file name
     //filename decoration with unique timestamp
     const filext = path.extname(file.originalname)//getting file extentio
     const fileName= file.originalname
     .replace(filext,"")
     .toLowerCase()
     .split(" ")
     .join("-")+"-"+Date.now();//empty the 

     cb(null, fileName +filext)
     },

 })
// using validation storage and set destination alter storage 
 var upload=multer({
    storage:storage, // here storage object will set
    fileFilter:(req,file,cb)=>{ // if file is not jpg or jpeg or png
     if(file.fieldname ==='avatar'){
         if(file.mimetype ==='image/png' ||
          file.mimetype === 'image/jpeg' ||
          file.mimetype ==='image/jpg'){
            cb(null,true)
        }else{
            cb(new Error ('only jpeg png or jpg file allowed'))
        }
     }else if(file.fieldname ==='doc'){
          if(file.mimetype === 'application/pdf'){
              cb(null, true)
          }else{
              cb(new Error('only pdf allowed'))
          }
     }else{
         cb(new Error('there is an unknown error occurred'))
     }
        
    },
   }) 

// here validation file and field name together 
/* var upload=multer({
    dest:UPLOAD_FOLDER,
    fileFilter:(req,file,cb)=>{ // if file is not jpg or jpeg or png
     if(file.fieldname ==='avatar'){
         if(file.mimetype ==='image/png' ||
          file.mimetype === 'image/jpeg' ||
          file.mimetype ==='image/jpg'){
            cb(null,true)
        }else{
            cb(new Error ('only jpeg png or jpg file allowed'))
        }
     }else if(file.fieldname ==='doc'){
          if(file.mimetype === 'application/pdf'){
              cb(null, true)
          }else{
              cb(new Error('only pdf allowed'))
          }
     }else{
         cb(new Error('there is an unknown error occurred'))
     }
        
    },
   }) */
//scafolding an object 
const app= express()

/* app.post('/',upload.single('avatar'),(req,res)=>{
    res.send('a validation file uploaded')
}) */


// for png pdf multi field validation use this
app.post('/',upload.fields([ //------------here field taken array like---------
    {name:'avatar',maxCount:1},{name:'doc',maxCount:1}
]),(req,res)=>{
    console.log(req.files)//here we can see the object of file and fieldname
    res.send('file uploaded')
})
// error handling middleware for validation
/* app.use((err,req,res,next)=>{
    if(err){ 
        res.status(500).send(err.message)
    }else{
        res.send('success')
    }
})
 */

// validation with multer instance error
 app.use((err,req,res,next)=>{
    if(err){
        if(err instanceof multer.MulterError){
            res.status(500).send('err with uploading')
        }else{
            res.status(500).send(err.message)
        }
    }else{
        res.send('success')
    }
}) 

app.listen(4000,()=>{
    console.log('this server is listening to the port of 4000')
})