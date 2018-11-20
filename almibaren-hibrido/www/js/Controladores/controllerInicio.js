angular.module('starter.controllers')

.controller('InicioCtrl',['$scope','InicioServicio','$state', function($scope,InicioServicio,$state) {
  var _this=this;
  var dni=localStorage.getItem("idUsuario");
    InicioServicio.masPopulares(dni).then(function(response){
      _this.productosPopu=response.data.populares;
      _this.productosReco=response.data.recomendados;
      _this.productosValo=response.data.valorados;
      _this.productosOfer=response.data.ofertas;
      console.log(response.data);
    });

    $scope.selecciona=function(seleccionado){
      console.log(seleccionado.nombre);
      localStorage.setItem("sele", JSON.stringify(seleccionado));
      $state.go('app.producto', {reload: true});
      return;
    }
}])
