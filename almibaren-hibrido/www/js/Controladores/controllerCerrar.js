angular.module('starter.controllers')

.controller('CerrarCtrl',['$rootScope','$scope','$state', function($rootScope,$scope,$state) {
  console.log("aa");
  localStorage.removeItem("idUsuario");
  $rootScope.registrado=false;
  $scope.$on('app.menu', function() {
    location.reload();
  });
  $state.go('app.login', {reload: true});
  $rootScope.borrarCache();
}])
