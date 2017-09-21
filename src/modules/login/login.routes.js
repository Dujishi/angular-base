module.exports = ['$stateProvider',  function($stateProvider) {
    $stateProvider.state('signout', {
        url: '/signout',
        name: 'signout',
        templateUrl : '/modules/login/html/signout.html',
        controller: 'SignoutController'
    })
    .state('signin', {
        url: '/signin',
        name: 'signin',
        templateUrl :'/modules/login/html/signin.html',
        controller: 'SigninController'
    });
}];
