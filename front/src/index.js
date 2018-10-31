import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'


import Main from './containers/Main';
import SidebarContainer from './containers/SidebarContainer';
//import store from './redux/store'

ReactDOM.render(
  <BrowserRouter>
      <Main />
  </BrowserRouter>,
  document.getElementById('root')
);

//<Route path="/" component={Main} />
// const app = <Provider store = {store}>
//   <BrowserRouter>
//     <Main />
//   </BrowserRouter>
// </Provider>

// ReactDOM.render(app, document.getElementById('root'))
