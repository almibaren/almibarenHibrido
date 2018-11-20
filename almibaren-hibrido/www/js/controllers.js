angular.module('starter.controllers', [])

.controller('AppCtrl',['$state','$scope','$ionicModal','$timeout','$rootScope','$ionicHistory', function($state,$scope, $ionicModal, $timeout,$rootScope,$ionicHistory) {
  $scope.verCarro=function(){
    $state.go('app.carrito', {reload: true});
    return;
  }
  $rootScope.borrarCache=function(){
    $ionicHistory.nextViewOptions({
      disableBack:true,
      disableAnimate:true
    });
    $ionicHistory.clearCache();
    $ionicHistory.clearHistory();
  }
  $rootScope.sele=function(pro){
    localStorage.setItem("sele", JSON.stringify(pro));
    $state.go('app.producto', {reload: true});
    $rootScope.borrarCache();
    return;
  }
}])
.controller('TabsCtrl',['$scope', function($scope) {

}])
