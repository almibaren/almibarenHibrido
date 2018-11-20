angular.module('starter.controllers')

.controller('JuegosCtrl',['$scope','$rootScope','$state','$ionicHistory','JuegosServicio', function($scope,$rootScope,$state,$ionicHistory,JuegosServicio) {
  var _this=this;
    JuegosServicio.obtener().then(function(response){
      _this.juegos=response.data;
    });
}])
