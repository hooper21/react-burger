import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./services/StoreService";
import App from './components/App/App';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router basename="/react-burger">
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)