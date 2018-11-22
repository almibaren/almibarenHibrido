angular.module('starter.services')
.factory('AjustesServicio', function($http){
  return{
    actualizarUsuario:function(user){
      console.log(user);
      var datasource = "http://192.168.6.161/almibarenBackend/users/";
      return $http.put(datasource,{
        dni:user.dni,
        nombre:user.nombre,
        apellido1:user.apellido1,
        apellido2:user.apellido2,
        email:user.email,
        user:user.user,
        passwd:user.pass,
        imagen:user.imagen
      });
    }
  }
})
