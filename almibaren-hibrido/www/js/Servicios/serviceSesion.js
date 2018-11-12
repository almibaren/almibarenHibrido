angular.module('starter.services')
.service('IniciarSession', function($http){
  return{
    iniciarSession:function(alumno){
      var datasource = "http://192.168.6.161/almibarenBackend/users/login/";
      return $http.post(datasource,{
        user:alumno.user,
        passwd:alumno.pass
      });
    }
  }
})
