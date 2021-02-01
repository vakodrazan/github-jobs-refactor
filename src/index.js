import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./app"
import { ContextProvider } from './context/Context';
import { GlobalContextProvider } from './context/GlobalContext';
import GlobalStyle from './global-style';

ReactDOM.render(
    <GlobalContextProvider>
        <ContextProvider>
            <GlobalStyle />
            <Router>
                <App />
            </Router>
        </ContextProvider>
    </GlobalContextProvider>, document.getElementById('root'))
