module.exports = ['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: '/modules/index/html/index.html',
            controller:"index"
        })
    .state('index.demo', {
        url: '/demo',
        templateUrl: '/modules/demo/html/main.html',
        controller:"demoController",
            resolve:{
                dynamicHtml : function(){
                    return "/modules/demo/html/dynamic1.html";
                }
            }
    });
}];