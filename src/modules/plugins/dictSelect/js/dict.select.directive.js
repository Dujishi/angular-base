module.exports = ['$document', function($document) {
    return {
        restrict: 'A',
        scope : {
            ngModel : '='
        },
        templateUrl: '/modules/plugins/dictSelect/html/dictSelect.html',
        link:function(scope, element, attrs, ctrl, transclude){
            element.addClass("dict-select");


        },
        controller:'dictSelectController'
    }
}];
