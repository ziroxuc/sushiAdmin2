var app = angular.module('SushiAdmin', ['ngRoute','SushiAdmin.config']);

app.controller('mainCtrl', ['$scope','Configuracion', function($scope,Configuracion){


    $scope.config = Configuracion.config;
    console.log( $scope.config);



}]);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/',{
            templateUrl:'src/paginas/dashboard.html'

    })
        .otherwise({
            redirectTo: '/'
        })

    
}]);