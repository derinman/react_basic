import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*
ReactDOM.render(
  <div>
  <h1> Hello world!</h1>,
  <h1> Hello Moto</h1>
  </div>,
  document.getElementById('root')
);
*/

/*
const testFunction =()=> {
  return( <button>大家好</button> );
}
ReactDOM.render(
  testFunction(),
  document.getElementById('root')
);
*/

/*
//在 html 標籤中利用「{}」寫javascript 表示式
const showOne = true;
ReactDOM.render(
    <h1> { (showOne==true) ? 'X' : 'O' } </h1>,
    document.getElementById('root')
);
*/

/*
//style變為一物件
const styleArgument = { fontSize: '100px', color: 'red' };
ReactDOM.render(
    <h1 style = { styleArgument } > Hello, world! </h1>,
    document.getElementById('root')
);
*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
