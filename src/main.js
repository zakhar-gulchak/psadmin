"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();
// TODO : add course ediiting ( FINAL CHALLENGE)
Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
