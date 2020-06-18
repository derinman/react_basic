import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//我們在使用div、button的時候，常在標籤中加上style、value、onclick
//這些屬性(attribute)來控制元素，我們可不可以也給我們自製的
//component一些能控制的attribute呢?在這樣的想法下，props就產生了。

//而React把我們自製的component當中所有的attribute和其他用來控制
//元件的參數(像是button中的文字)整合成一個物件，稱為props。
//舉例來說:
//<App version="4" data="none"/>
//App的props包含了version、data，也就是對App來說，
//它接到一個像這樣結構的參數:
//props:{
//  version: "4",
//  data: "none"
//}

/*
//在App標籤中加入name屬性
//請按F12看 react devtool的props
ReactDOM.render(
  <div>
      <App name="我的名字"/> 
  </div>,
  document.getElementById('root')
);
*/

/*
function App2(props){ // 在函式參數中加入props
  return(
       <button>大家好</button>
  );
}
ReactDOM.render(
  <div>
      <App2 name="我的名字"/> 
  </div>,
  document.getElementById('root')
);
*/

/*
//但是這樣我們的App函式只是能夠接收props而已，並沒有在任何地方使用
function App3(props){
  return(
  <button>{props.name}</button>
  )
}
ReactDOM.render(
  <div>
    <App3 name="薛伊閩" />
  </div>,
  document.getElementById('root')
);
*/

//React component設計的方式為，在下列兩個狀況發生時，reactDOM會
//進入re-render該component的update程序，更新畫面:
//1. props的值改變時
//2. state的值改變時


//使用props綁定資料的資料型態問題

//容易踩到的坑一:
//必須要加上{}才會接到正確的js資料型態
//<App number={87} getData={true}/>

//容易踩到的坑二:
//props不能被元件自己更改
//props是唯讀變數，所以在元件中這樣的寫法是錯誤的:
//this.props.名稱=值;

/*
//在這邊，我們會試著在父(index.js)定義一個改變父的函式，綁定
//在子元件(App.js)的props，並透過子元件觸發。
//父: index.js 子:App4
//自訂義App4 component
function App4(props){
  return(
    <button onClick={props.handleClick}>{props.name}</button>
  );
}
const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到了";
}
ReactDOM.render(
  <div>
      <App4 name="我的名字" handleClick={printMessage}/>
      <div id="show-area"></div>
  </div>,
  document.getElementById('root')
);
*/

//<元素名稱> (包在標籤中間的東西) </元素名稱>
//react component中，我們把包在標籤中間的東西，稱為children


//請按F12看 react devtool的props的children
//自訂義App5 component
function App5(props){
  return(
       <button> {props.children} </button> 
  );
}
ReactDOM.render(
  <div>
      <App5> 在index.js中設定文字 </App5>
  </div>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
