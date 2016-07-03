import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import routes from './config/routes';
import { createHashHistory } from 'history';
import DataServiceFactory from './services/dataServiceFactory';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const apiKey = '71c9a94f0b674c2d91522d8fecde5f7f';
const section = 'home';
const dataUrl = `http://api.nytimes.com/svc/topstories/v1/${section}.json?api-key=${apiKey}`;

let dataServiceFactory = new DataServiceFactory();
window.dataService = dataServiceFactory.createDataService(dataUrl);

ReactDOM.render(
    <Router history={appHistory}>{routes}</Router>,
    document.getElementById('app')
);
