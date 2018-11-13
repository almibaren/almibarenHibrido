angular.module('starter.controllers')

.controller('InicioCtrl',['$scope','InicioServicio','$state', function($scope,InicioServicio,$state) {
  var _this=this;
    InicioServicio.masPopulares().then(function(response){
      _this.productosPopu=response.data[0];
      _this.productosReco=response.data[1];
      console.log(response.data[0]);
    });
    $scope.selecciona=function(seleccionado){
      console.log(seleccionado.nombre);
      localStorage.setItem("sele", JSON.stringify(seleccionado));
      $state.go('app.producto', {reload: true});
    }
}])
