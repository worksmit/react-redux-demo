import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import UserPage from './UserPage';
import Thanks from './Thanks';

import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/*
// Wrap existing app in Provider - Step 2
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
*/


ReactDOM.render((
	<Provider store={store}>
      <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user-page">Form Page</Link></li>
       
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/thanks" component={Thanks}/>
      <Route path="/user-page" component={UserPage}/>
     
    </div>
  </Router>
  </Provider>),
    document.getElementById('root')
);