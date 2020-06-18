import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from "./Layout";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Layout>
            <App>在index.js中設定文字</App>
        </Layout>
    </div>,
    document.getElementById('root')
);
serviceWorker.unregister();