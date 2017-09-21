var angular = require('angular');
require('angular-once');
require('angular-ui-router');
require("angularjs-toaster");
require("angularjs-toaster/toaster.min.css");
var toasterTool = require("./modules/common/toaster.js");
var tools = require("./modules/common/tools.js");
var login = require("./modules/login");
var index = require("./modules/index");
var demo = require("./modules/demo");
require("angularjs-toaster");
require("ng-dialog");
require("ng-dialog/css/ngDialog.min.css");
require("ng-dialog/css/ngDialog-theme-default.css");
//@require "./modules/*/html/**/*.html"
//@require "./modules/*/css/**/*.less"

var getDynamicTemplateUrl = function(params){
  return '/modules/' + params.module + '/html/' + params.path;
};

angular.module('app', ['ui.router','ngAnimate', 'toaster','ngDialog', login, demo, index,'ui.tree']).run(['$rootScope','$templateCache','toaster','ngDialog','$location',function($rootScope, $templateCache, toaster,ngDialog,$location){
    $rootScope.$templateCache = $templateCache;
    toasterTool.init($rootScope, toaster,ngDialog);
    tools.init($location);
}] )
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/index');
      $stateProvider.state('dynamicMenu', {
          url: '/tas/:module/:controllerPrefix/:path',
          templateUrl : getDynamicTemplateUrl,
          controller: 'dynController'
      });
  }])
  .controller('dynController', require('./dynamic.controller.js'));