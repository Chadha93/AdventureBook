import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Provider keeps track of the global state for the application.
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { StyledEngineProvider} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme';
import App from './App';

import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </Provider>, document.getElementById('root'));