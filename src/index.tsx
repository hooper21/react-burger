import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./services/StoreService";
import App from './components/App/App';
import { BASE_URL } from "./config";

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router basename={BASE_URL}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)