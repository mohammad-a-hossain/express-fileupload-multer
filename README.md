# learning express file uploading system with multer 
**_dependencies_**
1. nodemon\ 2. express 3.multer package
---
1. _making a index.html page for file uploading_\
2. _install and set up a express server for start up _\
3. _make a sample express server to index.js_\
---
## process details one
--form multipart form data parse need to process of file upload for that we need a middleware name MULTER \
--now install multer command ----npm add multer and import multer in index
--an upload var will indicate multer object that indicate which folder file will upload
--making a folder name upload
--declaring a folder path name upload_folder that will indicate "dist" property inside multer object 
--upload var will return a middleware
--for a single file upload now set a upload.single() middleware inside post method
--a parameter will set inside upload.single('avatar') file name
--now select a file form front and upload to folder
-----simple set up done----------
---
## uploading multiple file process
--in front declare a multiple attribute in file
--if i want to upload multiple file i need to declare a array in app.post method upload.array('name',number)
---
## uploading multiple field
--in front declare another field lnput gallery
--server declare a array of object in upload.array() details
---
## upload none of file if...
--in front comment input and make field name 
--in server only a upload.none() will set . no file will upload but form  data
---
## single file upload with server side validation