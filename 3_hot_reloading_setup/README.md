
# Start with  lesson 1 and 2.
#03. Project setup: [Hot reloading setup] (https://www.youtube.com/watch?v=e0dN1w1gJJM&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=3)
1)Install the following components
```
C:\ReactJs\Tutorial\3_hot_reloading_setup>npm install --save-dev webpack-hot-middleware react-hot-loader
```
2) Import webpack-hot-middleware to server/index.js and used it as usually like middleware components
```
app.use(webpackMiddleware(compiler,{
    hot:true,
    publicPath:webpackConfig.output.publicPath,
    noInfo:true//It will eleminate noise from webpack
}));

app.use(webpackHotMiddleware(compiler))
```
3) In webpack add the entry, plugins, loader like below respectively

```
//entry
entry : [
    'webpack-hot-middleware/client', path.join(__dirname, '/client/index.js')
  ]


 // plugins
 plugins : [
    new webpack.NoEmitOnErrorsPlugin(), // Handle error mesage in a cleaner way
    new webpack
      .optimize
      .OccurrenceOrderPlugin(), //this plugin is ensure the consistence build hashes
    new webpack.HotModuleReplacementPlugin()
  ]

//loaders
loaders: ['react-hot-loader', 'babel-loader']
```
4) Now if you run it, it will not show because we have functional component in app.js which we need to make class component
```
//Functional component 
export default ()=>{
return(<div> Hellow world! </div>);
}

// Class component in es5
import React, {Component} from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                Hellow world!
            </div>
        );
    }
}


// Class component in es6
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                !Hellow world
            </div>
        );
    }
}

export default App;

````


5) Then what about functional component can we use it ? yes but not for now as a top level components. So lets define Greetings.js as a functional component and use it in App.js component

```
//Define greeting component
import React from 'react';

export default() => {
    return <h1>Hi!</h1>
}

// Call it in App.js file
import React, {Component} from 'react';
import Greetings from './Greetings';

class App extends Component {
    render() {
        return (
            <Greetings/>
        );
    }
}

export default App;

```