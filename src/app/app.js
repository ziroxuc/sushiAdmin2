var app = angular.module('SushiAdmin', ['ngRoute','SushiAdmin.config']);

app.controller('mainCtrl', ['$scope','Configuracion', function($scope,Configuracion){


    $scope.config = {};

    Configuracion.cargar().then(function () {

        $scope.config = Configuracion.config;
        console.log($scope.config);

    })

}]);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/',{
            templateUrl:'src/app/components/home/dashboard.html'

    })
        .otherwise({
            redirectTo: '/'
        })

    
}]);