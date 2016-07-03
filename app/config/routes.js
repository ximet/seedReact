import React from 'react';
import Main from '../components/Main';
import App from '../components/App';
import { Route, IndexRoute } from 'react-router';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Main} />
    </Route>
);
