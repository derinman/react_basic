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
//你要給的是布林值的true，可以只寫屬性名稱，直接省略要指定的值
//下面這兩個是相同的
ReactDOM.render(
  <div>
  <button value={true} > 是 </button>
  <button value > 是 </button>
  </div>,
  document.getElementById('root')
);
*/

/*
//在JSX改用駝峰法，也就是從onclick變成了onClick
ReactDOM.render(
  <button value={true}  
          onClick={()=>{return false} }
  >是</button>,
  document.getElementById('root')
);
*/

/*
//函式綁定第一種寫法
//函式的綁定和綁定資料一樣是使用{函式名稱}
const getValue=(event)=>{
  console.log(event.target.value)
}
ReactDOM.render(
  <div>
      <button value={true} onClick={getValue}>按下以取得數值 </button>
  </div>,
  document.getElementById('root')
);
*/

/*
//第二種寫法，箭頭函式
//每次渲染時都會創造一次，會影響效能，所以一般能用1的話就會用1的方法
const getValue=(value)=>{
  console.log(value)
}
ReactDOM.render(
  <div>
      <button value={true} onClick={(event)=>{getValue(event.target.value)}}>
          按下以取得數值 
      </button>
  </div>,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
