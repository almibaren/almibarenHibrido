angular.module('starter.controllers')

.controller('ProductoCtrl',['$scope','$rootScope','$state','$ionicHistory', function($scope,$rootScope,$state,$ionicHistory) {
  $scope.pro=JSON.parse(localStorage.getItem("sele"));

}])
