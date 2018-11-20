angular.module('starter.controllers')
.controller('ConsolasCtrl',['$scope','$rootScope','$state','$ionicHistory','ConsolasServicio', function($scope,$rootScope,$state,$ionicHistory,ConsolasServicio) {
    var _this=this;
      ConsolasServicio.obtener().then(function(response){
        _this.consolas=response.data;

        console.log(response.data);
      });
  }])
