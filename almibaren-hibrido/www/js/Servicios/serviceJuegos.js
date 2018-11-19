angular.module('starter.services')
.factory('JuegosServicio', function($http){
  return{
    obtener:function(){
      var datasource = "http://192.168.6.161/almibarenBackend/products/games/?callback=JSON_CALLBACK";
      return $http.jsonp(datasource);
    }
  }
})
