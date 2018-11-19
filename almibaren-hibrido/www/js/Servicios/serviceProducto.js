angular.module('starter.services')
.factory('ProductoServicio', function($http){
  return{
    obtenerProducto:function(pro){
      var datasource = "http://192.168.6.161/almibarenBackend/products/productIonic/?callback=JSON_CALLBACK";
      return $http.jsonp(datasource,{
        params:{productId:pro}});
      }
    }
  })
