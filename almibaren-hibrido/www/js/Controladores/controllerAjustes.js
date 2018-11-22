angular.module('starter.controllers')

.controller('AjustesCtrl',['$rootScope','$scope','$state','AjustesServicio', function($rootScope,$scope,$state,AjustesServicio) {
  $scope.s="";
  $scope.r="";

  if($rootScope.usuario!=null && $rootScope.usuario!='a'){
    console.log($rootScope.usuario);
    $scope.transa=$rootScope.usuario.transacciones.compras;
    console.log($scope.transa[0].idTransaccion);
    $scope.com="";
  }else{
      $state.go('app.login', {reload: true});
      $rootScope.borrarCache();
  }
  $scope.mod=function(){
    var user=$rootScope.user;
    if (user.pass==user.pass2 &&  user.dni!="" && user.nombre!="" && user.apellido1!="" && user.apellido2!="" && user.correo!="" && user.usuario!="" && user.pass!="" && user.url!="") {
      console.log("bien");
      AjustesServicio.actualizarUsuario(user).then(function(response){
        console.log(response);
      })
    }
  }
}])
