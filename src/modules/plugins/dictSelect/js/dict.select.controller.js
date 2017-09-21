module.exports = ['$scope','$attrs', function($scope, $attrs){
    $scope.data = {selected:{}};
    $scope.ngModel = $scope.ngModel || {};
    $scope.dictEntry = $attrs.dictEntry;
    $scope.dictValueName = $attrs.dictValueName;
    var dictChangFn =  $attrs.dictChange;

    if(dictChangFn && typeof $scope.$parent[dictChangFn] == "function"){
        $scope.dictChangFn = $scope.$parent [dictChangFn];
    }


    if(!$scope.dictValueName){
        alert("请配置dict-select的dict-value-name属性");
    }
    $scope.data.items = [
        {"id":"1","itemCode":"1","itemName":"字典1"},
        {"id":"2","itemCode":"2","itemName":"字典2"}
    ];
    $scope.data.selected = {
        itemCode :  $scope.ngModel[ $scope.dictValueName] || "",
        itemName :  $scope.ngModel[ $scope.dictValueName + "_"] || ""
    };

    //$scope.data.items = $scope[$scope.dictEntry];

    $scope.selectDictItem = function($event){
        var element = $event.target;
        var itemCode =  $scope.data.selected["itemCode"];
        var display = element.innerHTML;
        var oldValue = $scope.ngModel[$scope.dictValueName];
        $scope.ngModel[$scope.dictValueName] = itemCode;
        $scope.ngModel[$scope.dictValueName + "_"] = display;
        if($scope.dictChangFn && oldValue != itemCode){
            $scope.dictChangFn(oldValue, itemCode);
        }

    }

}];