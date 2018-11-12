angular.module('starter.controllers')

.controller('InicioCtrl', function($scope) {
/*  Cursos.getCursos().then(function(response){
    _this.cursos=response.data;
  });*/
  $scope.sliderOptions = {
          effect: 'slide',
          paginationHide: true,
          initialSlide: 0,
          onInit: function(swiper){
              $scope.swiper = swiper;
          },
          onSlideChangeEnd: function(swiper){
              // ....
          }
      };

})
