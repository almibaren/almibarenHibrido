angular.module('starter.services')
.factory('RegistrarServicio', function($http){
  return{
    regi:function(user){
      console.log(user);
      var datasource = "http://192.168.6.161/almibarenBackend/users/signup/";
      return $http.post(datasource,{
        dni:user.dni,
        nombre:user.nombre,
        apellido1:user.apellido1,
        apellido2:user.apellido2,
        email:user.mail,
        user:user.usuario,
        passwd:user.pass,
        imagen:user.url
      });
    }
  }
})
