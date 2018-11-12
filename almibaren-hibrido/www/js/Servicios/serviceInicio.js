angular.module('starter.services')
.service('InicioServicio', function($http){
  return{
    masPopulares:function(alumno){
      var datasource = "http://192.168.6.161/almibarenBackend/users/login/";
      return $http.jsonp(datasource);
    }
  }
})
