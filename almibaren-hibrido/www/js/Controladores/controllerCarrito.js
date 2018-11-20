angular.module('starter.controllers')

.controller('CarritoCtrl',['$scope','Carrito','$state','$rootScope', function($scope,Carrito,$state,$rootScope) {
  var _this=this;
  var productos=JSON.parse(localStorage.getItem("carr"));
  if (productos===null) {

  }else{
  var n={datos:[{

  }]}
  for (var i = 0; i < productos.datos.length; i++) {
    var a=productos.datos[i];
    var cal = a.producto.precio - (a.producto.precio * a.producto.descuento /100);
    console.log(a.producto.id);
    n.datos.push({
      producto:{
        "id":a.producto.id,
        "nombre":a.producto.nombre,
        "precio":a.producto.precio,
        "calculado":cal,
        "url":a.producto.url,
        "descuento":a.producto.descuento,
      }
    })

  }
  n.datos.splice(0,1);
  console.log(n.datos);
  _this.productos=n.datos;
}

  $scope.borrar=function(p){
    for(i=0;i<n.datos.length;i++){
      if (n.datos[i].producto.nombre==p.producto.nombre) {
        console.log(i);
        n.datos.splice(i,1);
        localStorage.removeItem("carr");
        localStorage.setItem("carr", JSON.stringify(n));
        break;
      }
    }
    _this.productos=n.datos;
    console.log(n.datos.length);
  }
  $scope.comprar=function(){
    if(localStorage.getItem("idUsuario")===null){
      localStorage.setItem("volver","carrito");
      $state.go('app.login', {reload: true});
    }else{
      var total=0;
      var array = [];
      console.log(_this.productos);
      for (var i = 0; i < _this.productos.length; i++) {
        total=_this.productos[i].producto.calculado + total;
        array.push(_this.productos[i].producto.id);
      }
      var compra={
        "dni":localStorage.getItem("idUsuario"),
        "productos":array,
        "tipo":"compra",
        "precio":total
      }
      console.log(compra);

      Carrito.compra(compra).then(function(response){
        console.log(response);
        localStorage.removeItem("carr");
      })
      alert("¡Compra realizada con exito!");
      $state.go('app.inicio', {reload: true});
    }
    $rootScope.borrarCache();
  }
}])
