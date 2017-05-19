import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import Hello from './components/Hello'
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Hello}>
                </IndexRoute>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));