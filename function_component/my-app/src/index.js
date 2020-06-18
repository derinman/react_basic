import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
//React component
//程式碼中的 {函式名稱} 變成了 <函式名稱/>
//App2()函式就成為了我們的component
//元素名稱第一個字母必須要是
//大寫、和函式(或class)名稱相同，JSX才會知道這是自製的component
function App2(){
  return(
    <button>大家好</button>
  );
}
ReactDOM.render(
  <div>
      <App2/>
      <h1>123</h1>
  </div>,
  document.getElementById('root')
);
*/

/*
//也可以寫成
function App2(){
  return(
    <button>大家好</button>
  );
}
ReactDOM.render(
  <div>
      <App2></App2>
      <h1>123</h1>
  </div>,
  document.getElementById('root')
);
*/

/*
//自製component Progress()
function Progress(){
  const barWidth="50%";
  return(
    <div>
      <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width:barWidth,height:"100%",borderRadius:"10px"}}>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
  <div>
      <Progress/>
  </div>,
  document.getElementById('root')
);
*/

/*
function App2(){
  return(
    <button>大家好</button>
  );
}
ReactDOM.render(
  <div>
      <App2/>
      <App2/>
      <App2/>
  </div>,
document.getElementById('root')
);
*/







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
