angular.module('starter.controllers')

.controller('LoginCtrl',['IniciarSession','$scope','$rootScope','$state','$ionicHistory', function(IniciarSession,$scope,$rootScope,$state,$ionicHistory) {
    localStorage.clear();
    $rootScope.registrado=false;
    $scope.$on('app.menu', function() {
      location.reload();
      $ionicHistory.clearCache();
      $ionicHistory.clearHistory();
    });
  $scope.alumno={user:"",pass:""};
  $scope.modificar=function(){
    IniciarSession.iniciarSession($scope.alumno).then(function(responde){
      console.log(responde.data.dni);
      if (responde.data.length!=0) {
        $rootScope.registrado=true;
        localStorage.clear();
        localStorage.setItem("idUsuario",responde.data.dni);
        $scope.$on('app.menu', function() {
          location.reload();
        });
        $state.go('app.sesion', {reload: true});
        $ionicHistory.nextViewOptions({
              disableBack:true,
              disableAnimate:true
            });
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();
        return;
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    })
  }
}])
.controller('SesionCtrl',['IniciarSession','$scope', function(IniciarSession,$scope) {

}])
