angular.module('starter.controllers')

.controller('RegistrarCtrl',['$scope','$rootScope','$state','$ionicHistory','RegistrarServicio', function($scope,$rootScope,$state,$ionicHistory,RegistrarServicio) {
  $scope.user={dni:"",nombre:"",apellido1:"",apellido2:"",correo:"",usuario:"",pass:"",pass2:"",url:""};

  $scope.regis=function(){
    console.log($scope.user);
    var user=$scope.user;
    if (user.pass==user.pass2 && user.dni!="" && user.nombre!="" && user.apellido1!="" && user.apellido2!="" && user.correo!="" && user.usuario!="" && user.pass!="" && user.url!="") {
      /*RegistrarServicio.regi($scope.user).then(function(response){
        console.log(response);
        alert("¡Usuario registrado con exito!");
        $state.go('app.login', {reload: true});
      })*/
      console.log("entra");
    }else{
      alert("Asegurese de que ha rellenado todos los campos y que pass y pass2 sean iguales")
    }
  }
}])
