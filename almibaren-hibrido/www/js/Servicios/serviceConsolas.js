angular.module('starter.services')
.factory('ConsolasServicio', function($http){
  return{
    obtener:function(){
      var datasource = "http://192.168.6.161/almibarenBackend/products/consoles/?callback=JSON_CALLBACK";
      return $http.jsonp(datasource);
    }
  }
})
