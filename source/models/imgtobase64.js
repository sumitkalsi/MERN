const fs = require('fs');

 
 let tobase64 =(data=>{
let img = data;
   let src = 
    fs.readFileSync(img.path)
  .toString('base64');
   
    let finalimage = {
      filename: img.originalname,
      content : src,
      extention: img.mimetype

    }
   return finalimage;
  });
   
 module.exports = tobase64;