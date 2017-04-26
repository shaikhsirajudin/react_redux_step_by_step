import express from 'express';
import path from 'path';
// its the compiler
import webpack from 'webpack';
//Its the request handdler
import webpackMiddleware from 'webpack-dev-middleware';
//This request handler is from webpack hot loading
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

// Initialize the express to app
let app = express();
//define compiler to reuse it
const compiler =webpack(webpackConfig);
//Use is function which take the request handler
//In case we pass webpackMiddleware as a request handler and its take compiler which is webpack, and compiler takes config to get the settings.
//this we need to provid additional option 
app.use(webpackMiddleware(compiler,{
    hot:true,
    publicPath:webpackConfig.output.publicPath,
    noInfo:true//It will eleminate noise from webpack
}));

app.use(webpackHotMiddleware(compiler))
/// 

//Lets define catch all routs,we have req and res, send back hello string with send function.
app.get('/*',(req,res)=>{
   // res.send('Hello world'); 
   res.sendFile(path.join(__dirname,'./index.html'))
});
// We need to listen to port 3000.
app.listen(3000,()=>console.log('we are running to 3000'));