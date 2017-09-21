var cityData = require("./areaData.js");

module.exports = ['$scope', function($scope){
  $scope.data = $scope.ngModel || {};
  $scope.cities = {};
  $scope.activeTab = "province";

  $scope.areaSelectClick = function(){
    $scope.showAreaSelect = !$scope.showAreaSelect;
    $scope.showProvinceTab();
  }

  $scope.hideCities = function(){
    $scope.showAreaSelect = false;
  }

  function setCities(province, city, county){
    $scope.data.province = province || '';
    $scope.data.city = city || '';
    $scope.data.county = county || '';
    $scope.ngModel = $scope.data;
  }

  $scope.selectCounty = function($childScope){
    $scope.hideCities();
    setCities($scope.data.province, $scope.data.city, $childScope.county);
  }

  $scope.selectCity  = function($childScope){
    setCities($scope.data.province, $childScope.city);
    $scope.showCountyTab();
  }
  $scope.selectProvince = function($childScope){
    setCities($childScope.province);
    $scope.showCityTab();
  }

  $scope.showProvinceTab = function(){
    $scope.activeTab = "province";
  }

  $scope.showCityTab = function(){
    setCity();
    $scope.activeTab = "city";
  }

  $scope.showCountyTab = function(){
    setCounty();
    $scope.activeTab = "county";

  }

  function setCounty(){
    var province = $scope.data.province;
    var city = $scope.data.city;
    var key = province + "-" + city;
    var cities = (province && city ) ? mergeCities(cityData.a[key]) : [];
    $scope.cities["counties"] = cities || [];
    if(cities.length == 0 ){
      $scope.hideCities();
    }
  }

  function setCity(){
    var province = $scope.data.province;
    var cities = province ? mergeCities(cityData.c[province]) : [];
    $scope.cities["cities"] = cities || [];
    $scope.cities["counties"] =  [];
  }

  function mergeCities(cities){
    if(!cities) return [];
    var allCities = [];
    var a2gCity = {key:'A-G',list:[]};
    var h2kCity =   {key:'H-K',list:[]};
    var l2sCity =   {key:'L-S',list:[]};
    var t2zCity =   {key:'T-Z',list:[]};

    var currCity;
    for(var i = 0; i < cities.length; i++){
      var city = cities[i];
      var key = city["key"];
      if('A' <= key && 'H' > key){
        currCity = a2gCity;
      }else if('H' <= key && 'K' > key){
        currCity = h2kCity;
      }else if('L' <= key && 'S' > key){
        currCity = l2sCity;
      }else if('T' <= key && 'Z' > key){
        currCity = t2zCity;
      }
      currCity.list = currCity.list.concat(city.list);
    }
    addCities(allCities, a2gCity);
    addCities(allCities, h2kCity);
    addCities(allCities, l2sCity);
    addCities(allCities, t2zCity);
    return allCities;
  }

  function addCities(allCities, cities){
    if(cities.list.length > 0){
      allCities.push(cities);
    }
  }

  function setProvince(){
    $scope.cities["provinces"] =  mergeCities(cityData.p);
  }

  setProvince();

}];
