var React = require('react');
var Main = require('../components/Main');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name='app' path='/' handler={ Main }> </Route>
);