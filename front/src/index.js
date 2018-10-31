import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'


import Main from './containers/Main';
//import store from './redux/store'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>,
  document.getElementById('root')
);


// const app = <Provider store = {store}>
//   <BrowserRouter>
//     <Main />
//   </BrowserRouter>
// </Provider>

// ReactDOM.render(app, document.getElementById('root'))
