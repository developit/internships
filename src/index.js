import { h, render, Component } from 'preact';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
