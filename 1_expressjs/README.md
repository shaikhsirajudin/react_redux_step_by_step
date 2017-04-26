Project Setup: Serve index.html with ExpressJS
1)	Create default folder run the following command from there with default setting
```
	C:\ReactJs\Tutorial>npm init –y 
```

2)	Create server folder inside it.
```
	C:\ReactJs\Tutorial>mkdir server
````
3)	Create index.js file which will be entry point.
```
import express from 'express';
import path from 'path';

// Initialize the express to app
let app = express();
//Lets define catch all routs,we have req and res, send back hello string with send function.
app.get('/*',(req,res)=>{
    res.send('Hello world'); /* first step */
   //res.sendFile(path.join(__dirname,'./index.html'))/*second step*/
});
// We need to listen to port 3000.
app.listen(3000,()=>console.log('we are running to 3000'));

```

4)	To  run with the node, but to understand imports we need to install babel-cli, express
```
	C:\ReactJs\Tutorial>npm install --save-dev babel-cli
	C:\ReactJs\Tutorial>npm install --save express
```
5)	Add following to package.js script block
```
	 "server": "babel-node server/index.js"
```

6)	Install the presets and  create .babelrc file
```
	npm install --save babel-preset-es2015
 add in the file .babelrc

{
    "presets":["es2015"]
}

```
7)	Run the following command
```
	C:\ReactJs\Tutorial>npm run server
 ```


8)	In place of displaying text we will call the files so for that create the index.html file
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>React App</title>
</head>

<body>
    <h1>Hellow world</h1>
    <div id="app"></div>    
</body>


```
9)	For every time we change the files we need to restart the server. To make this easy install “nodemon”

```
	C:\ReactJs\Tutorial>npm install --save-dev nodemon

 Modify the package.json script property  "server": "babel-node server/index.js" to 

 "server": "nodemon --watch server --exec babel-node -- server/index.js"

``
It means that we are asking nodemon to watch the server folder and execute babel-node  then we need to provide server/index.js to the  nodemon  not the babel-node for that we need to add –
