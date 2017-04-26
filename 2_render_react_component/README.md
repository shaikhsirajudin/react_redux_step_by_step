###Project Setup: [Render react component] (https://www.youtube.com/watch?v=e0dN1w1gJJM&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=3)
Take the backup from first lesson.
1) Install react and react-dom
```
C:\ReactJs\Tutorial\2renderReactComponent>npm install --save react react-dom

```
2) Create the "client" folder inside that "index.js,App.js" 
```
//index.js
import React, { Component } from 'react';
import {render} from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('app'));

//App.js

import React from 'react';

export default ()=>{
return(<div> Hellow world </div>);
}

```
3) Now bundle this code and include in the index.html page
```
//index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>React App</title>
</head>

<body>
    <h1>Hellow world</h1>
    <div id="app"></div>
    <script src="bundle.js" ></script>    
</body>

```
4) Create webpack.config.js file, in this 
=> we must provide entry point and output, but in this case middleware serve the file from memory so it will not used but when we deploy to prod
=> we need to define loaders by using module because webpack doesnt know about .js or any other files 
And loader to apply to those files type like babel
=> we need to provide resovle and extension for it
=> Its better you use always this method  path: path.resolve(__dirname, './') 
=> Always use  devtool: 'inline-source-map' in the config when we are in development
```
///webpack.config.js
import path from 'path';


export default {
  devtool: 'inline-source-map',
  entry: 
    path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
     filename: "bundle.js"

  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'babel-loader' ]
      }
    ]
  } 
}
```
5)Install the webpack, wepack-dev-middleware
```
C:\ReactJs\Tutorial\2renderReactComponent>npm install --save-dev webpack webpack-dev-middleware

loader to load the files.

C:\ReactJs\Tutorial\2renderReactComponent>npm install --save-dev babel-loader
```

5) Edit server/index.js, and add import webpack,webpack-dev-middleware,webpack.config.js
```
import express from 'express';
import path from 'path';
// its the compiler
import webpack from 'webpack';
//Its the request handdler
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

// Initialize the express to app
let app = express();
//Use is function which take the request handler
//In case we pass webpackMiddleware as a request handler and its take compiler which is webpack, and compiler takes config to get the settings.
app.use(webpackMiddleware(webpack(webpackConfig)));


//Lets define catch all routs,we have req and res, send back hello string with send function.
app.get('/*',(req,res)=>{
   // res.send('Hello world'); /* first step */
   res.sendFile(path.join(__dirname,'./index.html'))/*second step*/
});
// We need to listen to port 3000.
app.listen(3000,()=>console.log('we are running to 3000'));

```

6) Install babel preset for react and modify .babelrc file by adding react
```

C:\ReactJs\Tutorial\2renderReactComponent>npm install --save-dev babel-preset-react

.babelrc
{
    "presets":["es2015","react"]
}

or we can specify in module element of config

 module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

```
