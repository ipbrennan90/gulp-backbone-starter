'use strict';

var $ = require('jquery'),
	_ = require('underscore'),
	Backbone = require('backbone'),
	app = require('helpers/app');

var AppView = Backbone.View.extend({

	'events': {},

	'initialize': function () {
		var view = this;

		// _.bindAll(this, 'onScroll');

		view.render();

		console.log('AppView : Initialized');
	},

	'render': function () {
		var view = this;
	}
});

module.exports = AppView;
