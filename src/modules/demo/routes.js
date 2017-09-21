module.exports = ['$stateProvider',  function($stateProvider) {
    $stateProvider.state('demo', {
        url: '/demo',
        templateUrl: '/modules/demo/html/main.html',
        controller: 'demoController',
        resolve:{
            dynamicHtml : function(){
                return "/modules/demo/html/dynamic1.html";
            }
        }
    }).state('demo2.tabs', {
        url: '/tabs',
        templateUrl: '/modules/demo/html/tabs.html'
    }).state('demo.select', {
        url: '/select',
        templateUrl: '/modules/demo/html/select.html'
    }).state('demo2.carousel', {
        url: '/carousel',
        templateUrl: '/modules/demo/html/carousel.html'
    }).state('demo.areaSelect', {
        url: '/areaSelect',
        templateUrl: '/modules/demo/html/areaSelect.html'
    }).state('demo.modal', {
        url: '/modal',
        templateUrl: '/modules/demo/html/modal.html'
    }).state('demo.tools', {
        url: '/tools',
        templateUrl: '/modules/demo/html/tools.html'
    }).state('demo.fileUpload', {
        url: '/fileUpload',
        templateUrl: '/modules/demo/html/fileUpload.html'
    }).state('demo.http', {
        url: '/http',
        templateUrl: '/modules/demo/html/http.html'
    }).state('demo.dictSelect', {
        url: '/dictSelect',
        templateUrl: '/modules/demo/html/dictSelect.html'
    }).state('demo.dateRegion', {
        url: '/dateRegion',
        templateUrl: '/modules/demo/html/dateRegion.html'
    }).state('demo2', {
            url: '/demo2',
            templateUrl:'/modules/demo/html/main.html',
            controller: 'demoController',
            resolve:{
                dynamicHtml : function(){
                    return "/modules/demo/html/dynamic2.html";
                }
            }
        });

}];
