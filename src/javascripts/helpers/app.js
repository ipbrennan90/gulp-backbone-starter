'use strict';

var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		app,
		tracker = require('./tracker');

function App() {
	var $config = $('#app-config'),
			data = $config.length && $config.text() ? $.parseJSON($.trim($config.text())) : {};

	this.collections = {};
	this.views = {};
	this.mediaQueries = {
		'tablet': 'only screen and (min-width: 750px)'
	};

	this.tracker = tracker;

	// Extend with config data and events
	_.extend(this, data, Backbone.Events);
}

App.prototype.isMediaQuery = function (mediaQuery) {
	if (Modernizr.mq(this.mediaQueries[mediaQuery])) {
		return true
	}
	return false
};

App.prototype.isMobile = function () {
	return (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
App.prototype.detectIE = function () {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

module.exports = function () {
	if (!app) app = new App();
	return app;
}();
