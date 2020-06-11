import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import history from './store/history';
import { ThemeProvider, CssBaseline, ThemeOptions, createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const store = configureStore();

const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    primary: green
  }
};

const theme = createMuiTheme(themeOptions);

const Root = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>
  </ThemeProvider>

);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
