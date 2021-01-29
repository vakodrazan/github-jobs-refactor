import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app"
import { ContextProvider } from './context/Context';
import { GlobalContextProvider } from './context/GlobalContext';

ReactDOM.render(
    <GlobalContextProvider>
        <ContextProvider>
            <App />
        </ContextProvider>
    </GlobalContextProvider>, document.getElementById('root'))
