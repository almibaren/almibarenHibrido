angular.module('starter.controllers')

.controller('ServicioCtrl',['$scope','ConsolasServicio','SmartServicio', function($scope,ConsolasServicio,SmartServicio) {
  var _this=this;
  _this.prob=["Pantalla rota", "No se enciende","No carga", "Pantalla tactil no funciona","Otro"]
    ConsolasServicio.obtener().then(function(response){
      _this.productos=response.data;
    });
    SmartServicio.obtener().then(function(response){
      _this.movil=response.data;
    });
}])
