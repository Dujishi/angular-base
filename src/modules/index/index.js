var angular = require('angular');
var once = require('angular-once');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('ui-select');
require('angular-animate');
require("./css/index.less");

//@require "./html/**/*.html"

//define the base.index module
module.exports = angular.module('index', ['ui.router','ui.bootstrap','ui.select','once','ngAnimate','area.select','dict.select'])
    .config(require('./routes.js'))
    .controller('index', require('./js/index.js'))
    .controller('indexModalController', require('./js/modal.controller.js'))
    .name;