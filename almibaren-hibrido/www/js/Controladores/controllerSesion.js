angular.module('starter.controllers')

.controller('LoginCtrl',['IniciarSession','$scope','$rootScope','$state','$ionicHistory', function(IniciarSession,$scope,$rootScope,$state,$ionicHistory) {
  $scope.alumno={user:"",pass:""};
  $scope.modificar=function(){
    IniciarSession.iniciarSession($scope.alumno).then(function(responde){
      console.log(responde.data.dni);
      if (responde.data.length!=0) {
        $rootScope.registrado=true;
        localStorage.setItem("idUsuario",responde.data.dni);
        $scope.$on('app.menu', function() {
          location.reload();
        });
        if (localStorage.getItem("volver")==="carrito") {
          localStorage.removeItem("volver");
          $state.go('app.carrito', {reload: true});
        }else{
          $state.go('app.inicio', {reload: true});
        }
        $rootScope.borrarCache();
        return;
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    })
  }
}])
.controller('SesionCtrl',['IniciarSession','$scope', function(IniciarSession,$scope) {

}])
