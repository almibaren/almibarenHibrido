angular.module('starter.controllers')

.controller('CarritoCtrl', function($scope) {
  var _this=this;
  var productos=JSON.parse(localStorage.getItem("carr"));
  var n={datos:[{

  }]}
  productos.datos.forEach(function(a){
    var cal = a.producto.precio - (a.producto.precio * a.producto.descuento /100);

    n.datos.push({
      producto:{
        "nombre":a.producto.nombre,
        "precio":a.producto.precio,
        "calculado":cal,
        "url":a.producto.url,
        "descuento":a.producto.descuento,
      }
    })

  })
  n.datos.splice(0,1);
  console.log(n.datos);
  _this.productos=n.datos;

  $scope.borrar=function(p){
    console.log(n.datos.length);
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
})
