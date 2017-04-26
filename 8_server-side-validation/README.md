
# Start with  lesson 7.
#07. User Sign Up: Server-side Validation (https://www.youtube.com/watch?v=gZ_fR6o98dE&index=8&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY)
1) To parse the request data we need to install another middle ware body-parser, validator
```
C:\ReactJs\Tutorial\8_server-side-validation>npm install --save body-parser
C:\ReactJs\Tutorial\8_server-side-validation>npm install --save validator

```
2) First create serverside route in server/index.js file,, we need to use json middleware body-parser
```
// import routes/users this file
import users from './routes/users';

// request body parser
import bodyParser from 'body-parser';

// as we are using json object for that we need to use json parser.
app.use(bodyParser.json())

// define here API for users, it takes the parameter users
app.use('api/users',users)


```

3) Create server/routes/users.js, whenever we need to create route we need to import express
```


```