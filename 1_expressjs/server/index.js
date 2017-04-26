import express from 'express';
import path from 'path';

// Initialize the express to app
let app = express();
//Lets define catch all routs,we have req and res, send back hello string with send function.
app.get('/*',(req,res)=>{
   // res.send('Hello world'); /* first step */
   res.sendFile(path.join(__dirname,'./index.html'))/*second step*/
});
// We need to listen to port 3000.
app.listen(3000,()=>console.log('we are running to 3000'));