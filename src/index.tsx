import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './redux/rootReducer';
import theme from './styles/CoreTheme';

const store = createStore(rootReducer);

ReactDOM.render(
  <ReduxProvider store={store}>
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <App />
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  </ReduxProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
