angular.module('starter.controllers')

.controller('AjustesCtrl',['$rootScope','$scope', function($rootScope,$scope) {
  console.log($rootScope.usuario);
  $scope.transa=$rootScope.usuario.transacciones.compras;
  console.log($scope.transa[0].idTransaccion);
  $scope.com="";
  $scope.combo=function(){
    console.log("a");
  }
}])
