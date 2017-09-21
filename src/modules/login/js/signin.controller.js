module.exports = ['$scope','$state', function($scope, $state) {
    $scope.user = {
      name:"",
      password:""
    };

    //执行用户登录操作
    $scope.signin = function() {
        console.log($scope.user.name + " sign in");
    };
}];
