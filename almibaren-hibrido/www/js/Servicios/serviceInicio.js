angular.module('starter.services')
.factory('InicioServicio', function($http){
  return{
    masPopulares:function(dni){
      console.log(dni);
      if (dni===null) {
        var datasource = "http://192.168.6.161/almibarenBackend/products/?callback=JSON_CALLBACK";
        return $http.jsonp(datasource);
      }else{
        var datasource = "http://192.168.6.161/almibarenBackend/products/?callback=JSON_CALLBACK";
        return $http.jsonp(datasource,{
          params:{userId:dni}
        });
      }
    }
  }
})
