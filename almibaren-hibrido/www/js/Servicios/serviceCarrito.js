angular.module('starter.services')
.service('Carrito', function($http){
  return{
    compra:function(productos){
      var datasource = "http://192.168.6.161/almibarenBackend/transaction/";
      console.log(productos.productos);
      return $http.post(datasource,{
        userId:productos.dni,
        precio:productos.precio,
        products:productos.productos,
        tipo:productos.tipo
      });
    }
  }
})
