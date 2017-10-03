var app = angular.module('SushiAdmin.config',[]);

app.factory('Configuracion', ['$http', function ($http) {


    var self = {

        config : {
            Aplicativo: "sushiAdmin"
        }
    };

    return self;
}]);