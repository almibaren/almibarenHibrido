angular.module('starter.controllers')

.controller('LoginCtrl',['IniciarSession','$scope','$rootScope','$state','$ionicHistory','UsuarioServicio', function(IniciarSession,$scope,$rootScope,$state,$ionicHistory,UsuarioServicio) {
  $scope.alumno={user:"",pass:""};
  $scope.modificar=function(){
    IniciarSession.iniciarSession($scope.alumno).then(function(responde){
      if (responde.data.length!=0) {
        $rootScope.registrado=true;
        localStorage.setItem("idUsuario",responde.data.dni);
        $rootScope.user=responde.data;
        console.log($rootScope.user);
        $scope.$on('app.menu', function() {
          location.reload();
        });
        UsuarioServicio.recibirUsuario(responde.data.dni).then(function(response){
          $rootScope.usuario=response.data;
          console.log(response.data.transacciones.compras[0].idTransaccion);
          if (localStorage.getItem("volver")==="carrito") {
            localStorage.removeItem("volver");
            //$state.go('app.carrito', {reload: true});
          }else{
            //$state.go('app.inicio', {reload: true});
          }
          $rootScope.borrarCache();
          return;
        })
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    })
  }
}])
.controller('SesionCtrl',['IniciarSession','$scope', function(IniciarSession,$scope) {

}])
