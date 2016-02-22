'use strict';

var $ = require('jquery'),
	_ = require('underscore'),
	Backbone = require('backbone'),
	AppView = require('views/app-view'),
	app = require('helpers/app');

var Router = Backbone.Router.extend({

	'routes': {
		'': 'default'
	},

	'initialize': function () {
		console.log('Router : Initialized');
		app.views.appView = new AppView();
	},

	'default': function () {

	}
});

module.exports = Router;
