var tools = require("../../common/tools");
var navListArr = [];
var dataUrl = {
    "query": {
        list: "/dist/data/menu.json",
    }
}


module.exports = ['$scope','$http', function($scope,$http) {
    $scope.navListArr = navListArr;

    $http.get(dataUrl.query.list)
        .then(function(result){
            var list = transData(result.data.body.menuList, 'id', 'pid', 'items');
            $scope.leftNavlist = list;
        });

    //点击左侧生成tab
    $scope.creatNav = function (j) {
        j.toggle();
        if(!j.$modelValue.items || j.$modelValue.items.length == 0){
            var item = {
                tagName : j.$modelValue.text,
                url : j.$modelValue.url,
            }

            if(!contains(navListArr,item)){
                navListArr.push(item);
            }
            $scope.activeTab = j.$modelValue.text;
            tools.goPage(j.$modelValue.url);
        }
    }

    //点击tab栏删除按钮
    $scope.handelNav = function (i,$el) {
        var el = $el.target.localName;
        if(el == 'div'){
            var index = function() {
                for(var k = 0;k<navListArr.length;k++){
                    if(navListArr[k].tagName == i.tagName){
                        return k
                    }
                }
            }();
            navListArr.splice(index,1);
            var newIndex = index == 0 ? index:index-1;
            if(navListArr.length >0){
                $scope.activeTab = navListArr[newIndex].tagName;
                tools.goPage(navListArr[newIndex].url);
            }else{
                tools.goPage('#/index');
            }

        }else{
            $scope.activeTab = i.tagName;
            tools.goPage(i.url);
        }
    }


    $scope.isActive = function(i){
      return i == $scope.activeTab;
    };


    function contains(arr,obj) {
        var i = arr.length;
        while (i--){
            if(arr[i].tagName == obj.tagName){
                return true
            }
        }
        return false
    }

    //json转换树状结构
    function transData(a, idStr, pidStr, chindrenStr){
        var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = a.length;
        for(; i < len; i++){
            hash[a[i][id]] = a[i];
        }
        for(; j < len; j++){
            var aVal = a[j], hashVP = hash[aVal[pid]];
            if(hashVP){
                !hashVP[children] && (hashVP[children] = []);
                hashVP[children].push(aVal);
            }else{
                r.push(aVal);
            }
        }
        return r;
    }


}]