import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './utils/Auth'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { theme } from './themes/mainTheme';

const auth = new Auth()

ReactDOM.render(
  <ThemeProvider value={theme}>
    <App auth={auth} />
  </ThemeProvider>, document.getElementById('root'))

serviceWorker.register()
