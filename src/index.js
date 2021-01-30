import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app"
import { ContextProvider } from './context/Context';
import { GlobalContextProvider } from './context/GlobalContext';
import GlobalStyle from './global-style';

ReactDOM.render(
    <GlobalContextProvider>
        <ContextProvider>
            <GlobalStyle />
            <App />
        </ContextProvider>
    </GlobalContextProvider>, document.getElementById('root'))
