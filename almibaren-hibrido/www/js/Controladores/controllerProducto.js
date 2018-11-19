angular.module('starter.controllers')

.controller('ProductoCtrl',['$scope','$rootScope','$state','$ionicHistory', function($scope,$rootScope,$state,$ionicHistory) {
  var _this=this;
  $scope.pro=JSON.parse(localStorage.getItem("sele"));
  $scope.carrito = function(sele){
    var n=JSON.parse(localStorage.getItem("carr"));
    if(localStorage.getItem("carr")=== null){
      var n={datos:[{

      }]}
      n.datos.push({
        "producto": sele,
      });
      n.datos.splice(0,1);
      localStorage.setItem("carr", JSON.stringify(n));

      $state.go('app.carrito', {reload: true});
    }

    //_this.carr=JSON.parse(localStorage.getItem("car"));
    n.datos.push({
      "producto": sele,
    });
    console.log(n);
    localStorage.setItem("carr", JSON.stringify(n));
    //localStorage.removeItem("carr");
    $state.go('app.carrito', {reload: true});
  }
}])
