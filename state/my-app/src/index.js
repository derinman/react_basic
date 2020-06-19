import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//state這個變數是read-only的，我們並不能用this.state.變數=值直接修改
//state，而是必須要透過React預寫好的函式setState()來更改
//setState中「存在但沒有被寫到的state」不會被移除，不存在的state會被建立。
class App3 extends Component{
  constructor(props) {
    super(props);
    this.state={
      percent:"20%"
    }
    this.changePercent=this.changePercent.bind(this);
  }
  changePercent(){ 
    this.setState({percent:"70%"})
  }
  //this.state={ 變數名稱A: 初始化值, 變數名稱B: 初始化值, (...類推)};
  render(){
        return(
          <div>
            <div className="progress-back" style={{backgroundColor:"black",width:"200px",height:"7px",borderRadius:"10px",margin:"25px"}}>
              <div className="progress-bar" style={{backgroundColor:"red",width:"20%",height:"100%",borderRadius:"10px"}}>
              </div>
            </div>
            <button onClick={this.changePercent} style={{margin:"0px 25px"}}>轉換百分比 </button>
          </div>
        );
  }
}
ReactDOM.render(
  <div>
  <App3 />
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
