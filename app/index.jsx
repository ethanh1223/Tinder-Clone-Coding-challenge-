import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/app.js';
import ProfileViewer from './Containers/ProfileViewer.js';

import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import reducers from './Reducers';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <MuiThemeProvider >
        <App />
      </MuiThemeProvider>
  </Provider>, document.getElementById('app'))