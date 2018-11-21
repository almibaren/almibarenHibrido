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
.factory('UsuarioServicio', function($http){
  return{
    recibirUsuario:function(id){
      var datasource = "https://almibar.webcindario.com/almibarenBackend/users/profile/?callback=JSON_CALLBACK";
      return $http.jsonp(datasource,{
        params:{userId:id}});
      }
    }
  })
