angular.module('starter.services')
.factory('SmartServicio', function($http){
  return{
    obtener:function(){
      var datasource = "http://192.168.6.161/almibarenBackend/products/smarttab/?callback=JSON_CALLBACK";
      return $http.jsonp(datasource);
    }
  }
})
