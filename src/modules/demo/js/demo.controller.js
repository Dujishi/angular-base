var tools = require("../../common/tools.js");
var toaster = require("../../common/toaster.js");
require("../../plugins/dateRegion/js/angular-locale_zh-cn.js");

module.exports = ['$scope','$state','$document','$uibModal', '$http','dynamicHtml',
    function($scope, $state,$document,$uibModal, $http,dynamicHtml) {
    $scope.info = "这是js里设置的值";

    $scope.dynamicHtml = dynamicHtml;

    //tab示例
    $scope.model = {
      name:'tabs'
    };

    //areaSelect示例
    $scope.testModel1 = {
      "province":"湖南省",
      "city":"邵阳市",
      "county":"隆回县"
    };

    $scope.testModel2 = {
      "province":"湖南省",
      "city":"邵阳市",
      "county":"洞口县"
    };


    //轮播图示例
    $scope.myInterval = 3000;
        $scope.carousel = {active : 0};
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: require('../images/1.jpg'),
            id:'1',
            index:0
        });
        slides.push({
            image: require('../images/2.jpg'),
            id:'2',
            index:1
        });
        slides.push({
            image: require('../images/3.jpg'),
            id:'3',
            index:2
        });
        slides.push({
            image: require('../images/4.jpg'),
            id:'4',
            index:3
        });
    };
    $scope.addSlide();
    $scope.setCarousel = function(active){
        $scope.carousel.active = active;
    }

    $scope.clickImage = function(event){

    }

    //下拉列表示例
    $scope.pepoles = {
      'select':[{id:1,name:'kevin'},{id:2,name:'alex'},{id:3,name:'wang'}]
    };

    //弹出窗口示例
    $scope.animationsEnabled = true;
    $scope.items =  ['item1', 'item2', 'item3'];


    $scope.openModal = function(size){
      var parentElem = angular.element($document[0].querySelector('.modal-demo '));

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/modules/demo/html/modalContent1.html',
        controller: 'modalController', //在index.js里注册
        size: size,
        appendTo: parentElem,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    }

    $scope.md5 = function(){


    }

    $scope.showSuccessMsg = function(){
        toaster.success('这是提示的信息');
        toaster.success("标题",'这是提示的信息');
    }
    $scope.showInfoMsg = function(){
        toaster.info("消息", "调用提示信息");
        toaster.info("调用提示信息，无标题");
    }

    $scope.showWarningMsg = function(){
        toaster.warning("警告","调用警告");
        toaster.warning("调用警告，无标题");
    }

    $scope.showErrorMsg = function(){
        toaster.error("错误","调用失败");
        toaster.error("调用失败，无标题");
    }

    //confirm 弹出窗口确认
    $scope.showConfirmMsg = function(){
        var confirmWindow = toaster.confirm("确认提交么");
        confirmWindow.closePromise.then(function(data){
            toaster.info(angular.toJson(data.value));
        });
    }

    var a = tools.md5("888888");

    var b = tools.md5("王虎888888");


    //附件上传
    $scope.testFileUploadModel = "123sdafdsfdsf34";
    $scope.testFileUploadModel2 = "123dsfdasfadsf45";

    //http请求
    $scope.requestParam = '{"entryCode":"82862a309d7c480ca94db0d4e63909ef"}';
    $scope.getRequestUrl = "/tas/dict/get";
    $scope.postRequestUrl = "/tas/dict/modify";
    $scope.sendGetRequest = function(){
        var params = angular.fromJson($scope.requestParam);
        $http.get($scope.getRequestUrl,{params:params}).then(function(result){
            $scope.requestResult = angular.toJson(result.data);
        });
    }

    $scope.sendPostRequest = function(){

        var params = angular.fromJson($scope.requestParam);
        $http.post($scope.postRequestUrl,params).then(function(result){
            $scope.requestResult = angular.toJson(result.data);
        });
    };

    //数据字典
    $scope.testDict1 = {"id":"1","dict1":"2","dict1_":"字典2",'name':'呵呵x'};
    $scope.testDict2 = {"id":"2","dict2":"2","dict2_":"字典2",'name':'呵呵c'};
    $scope.getDictValue = function(){
        var id1 = $scope.testDict1.dict1;
        var id2 = $scope.testDict2.dict2;
    }
    $scope.dictChange = function(oldValue, newValue){
        alert("新选择的字典值:" + newValue);
    }

    //日期区间
    $scope.dateRegion = {
        testBegin1:"20170521",
        testEnd1:"20170610",
        testBegin2:"20170522",
        testEnd2:"20170620",
        testBegin3:"20170523",
        testEnd3:"20170630"
    };
    $scope.openBegin = function(){
      $scope.dateRegion.opened = true;
    }

    $scope.getTime = function(){
        toaster.info( $scope.dateRegion.testBegin1 + ":" + $scope.dateRegion.testEnd1);
    }

    $scope.setDateRegion = function(){
        $scope.dateRegion.testBegin1 = "20100625";
        $scope.dateRegion.testEnd1 = "20170730";
    }

    $scope.clearDateRegion = function(){
        $scope.dateRegion.testBegin1 = null;
        $scope.dateRegion.testEnd1 = null;

    }
}];
