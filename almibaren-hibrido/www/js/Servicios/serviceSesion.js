angular.module('starter.services')
.service('IniciarSession', function($http){
  return{
    iniciarSession:function(alumno){
      var datasource = "http://127.0.0.1/wsejercicio/";
      return $http.put(datasource,{
        user:alumno.user,
        passwd:alumno.pass
      });
    }
  }
})
