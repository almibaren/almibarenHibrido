angular.module('starter.controllers')

.controller('RegistrarCtrl',['$scope','$rootScope','$state','$ionicHistory','RegistrarServicio', function($scope,$rootScope,$state,$ionicHistory,RegistrarServicio) {
  $scope.user={dni:"",nombre:"",apellido1:"",apellido2:"",correo:"",usuario:"",pass:"",pass2:"",url:""};

  $scope.regis=function(){
    console.log($scope.user);
    if ($scope.user.pass==$scope.user.pass2) {
      RegistrarServicio.regi($scope.user).then(function(response){
        console.log(response);
        alert("¡Usuario registrado con exito!");
        $state.go('app.login', {reload: true});
      })
    }
  }
}])
