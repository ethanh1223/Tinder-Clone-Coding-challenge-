import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app.js';
import ProfileViewer from './Containers/ProfileViewer.js';

import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './Reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <MuiThemeProvider >
        <div>
          <Route path='/' component={App} />
          <Route path='/' component={ProfileViewer} />
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>, document.getElementById('app'))