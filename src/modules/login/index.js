var angular = require('angular');
require('angular-ui-router');
require("./less/login.less");
require("../common/tools.js");
//define the base.login module

//@require "./html/**/*.html"

module.exports = angular.module('base.login', ['ui.router'])
    .config(require('./login.routes.js'))
    .controller('SigninController', require('./js/signin.controller.js'))
    .controller('SignoutController', require('./js/signout.controller.js'))
    .name;
