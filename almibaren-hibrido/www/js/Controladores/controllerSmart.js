angular.module('starter.controllers')
.controller('SmartCtrl',['$scope','$rootScope','$state','$ionicHistory','SmartServicio', function($scope,$rootScope,$state,$ionicHistory,SmartServicio) {
    var _this=this;
      SmartServicio.obtener().then(function(response){
        _this.smart=response.data;
        console.log(response.data);
      });
  }])
