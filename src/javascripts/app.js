

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Router = require('routers/router');
var app = require('helpers/app');

window.$ = $;
window.jQuery = $;

Backbone.$ = $;

var router = new Router();

Backbone.history.start();
