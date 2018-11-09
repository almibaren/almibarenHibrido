// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.inicio', {
    url: '/inicio',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio.html',
        controller: 'InicioCtrl'
      }
    }
  })
    .state('app.juegos', {
      url: '/juegos',
      views: {
        'menuContent': {
          templateUrl: 'templates/juegos.html',
          controller: 'JuegosCtrl'
        }
      }
    })
    .state('app.acerca', {
      url: '/acerca',
      views: {
        'menuContent': {
          templateUrl: 'templates/acerca.html',
          controller: 'AcercaCtrl'
        }
      }
    })
    .state('app.ajustes', {
      url: '/ajustes',
      views: {
        'menuContent': {
          templateUrl: 'templates/ajustes.html',
          controller: 'AjustesCtrl'
        }
      }
    })
    .state('app.consolas', {
      url: '/consolas',
      views: {
        'menuContent': {
          templateUrl: 'templates/consolas.html',
          controller: 'ConsolasCtrl'
        }
      }
    })
    .state('app.servicio', {
      url: '/servicio',
      views: {
        'menuContent': {
          templateUrl: 'templates/servicio.html',
          controller: 'ServicioCtrl'
        }
      }
    })
    .state('app.sesion', {
      url: '/sesion',
      views: {
        'menuContent': {
          templateUrl: 'templates/sesion.html',
          controller: 'SesionCtrl'
        }
      }
    })
    .state('app.smart', {
      url: '/smart',
      views: {
        'menuContent': {
          templateUrl: 'templates/smart.html',
          controller: 'SmartCtrl'
        }
      }
    })
    .state('app.ubicacion', {
      url: '/ubicacion',
      views: {
        'menuContent': {
          templateUrl: 'templates/ubicacion.html',
          controller: 'UbicacionCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
