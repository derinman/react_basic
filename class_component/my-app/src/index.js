import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
//比較class function差異，"render"
class App2 extends Component{ 
  render(){
    return(
      <div>
        helloWorld,hi
      </div>
    );
  }
}
function App3(){
  return(
    <div>
          helloWorld,嗨
    </div>
  );
}
ReactDOM.render(
  <div>
  <App2 />
  <App3 />
  </div>,
  document.getElementById('root')
);
*/

/*
//小按鈕component
class App2 extends Component{ 
  render(){
    return(
      <button>
        {this.props.name}
      </button>
    );
  }
}
//注意!:<App2 name={"你敢按?"}/>
//要加{}
ReactDOM.render(
  <div>
  <App2 name={"你敢按?"}/>
  <App2 name={"我會怕!"}/>
  </div>,
  document.getElementById('root')
);
*/





serviceWorker.unregister();
