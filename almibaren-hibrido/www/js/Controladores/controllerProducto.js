angular.module('starter.controllers')

.controller('ProductoCtrl',['$scope','$rootScope','$state','$ionicHistory','ProductoServicio', function($scope,$rootScope,$state,$ionicHistory,ProductoServicio) {
  var _this=this;
  $scope.pro=JSON.parse(localStorage.getItem("sele"));
  ProductoServicio.obtenerProducto($scope.pro.id).then(function(response){
    $scope.pro=response.data;
    $scope.cal=response.data.precio-response.data.precio*response.data.descuento/100;


    $scope.ur=response.data.url.url1;
    console.log(response.data);
  });
  $scope.com = function(sele){
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
    n.datos.push({
      "producto": sele,
    });
    console.log(n);
    localStorage.setItem("carr", JSON.stringify(n));
    $state.go('app.carrito');
    $rootScope.borrarCache();
  }
  $scope.ca = function(sele){
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
    n.datos.push({
      "producto": sele,
    });
    console.log(n);
    localStorage.setItem("carr", JSON.stringify(n));
  }
  $scope.cambiar=function(sele){
    $scope.ur=sele;
  }
}])
