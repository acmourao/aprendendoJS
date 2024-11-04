var app = angular.module("myApp", []);

app.run(function ($rootScope) {
    $rootScope.firstName = "John";
    $rootScope.lastName = "Doe";
    $rootScope.meuNome = "zé do caixão";
});

app.controller('mainController', function ($scope, $rootScope) {
    $scope.updateRootScope = function () {
        $rootScope.meuNome = $scope.meuNome;
    }
});

app.controller('layoutController', ['$scope', 'CtrlService', function ($scope, ctrlService) {

    $scope.saveLayoutToAPI = function () {
        $scope.meuNome = 'teste';
        ctrlService.save($scope);
    }
    $scope.loadLayoutFromAPI = function () {
        ctrlService.load();
    };

}]);

app.controller('segundoLayoutController', ['$scope', 'CtrlService', function ($scope, ctrlService) {

    $scope.saveLayoutToAPI = function () {
        $scope.meuNome = "João Lingüiça";
        ctrlService.save($scope);
    }
    $scope.loadLayoutFromAPI = function () {
        ctrlService.load();
    };

}]);

app.service('CtrlService', ['$log', 'AlertService', '$rootScope', function ($log, alertService, $rootScope) {
    this.save = function ($scope) {
        $log.log('Layout saved -> ' + $rootScope.meuNome + ' -> ' + $scope.meuNome);
        alertService.doAlert($rootScope.meuNome + ' -> ' + $scope.meuNome);
    };

    this.load = function () {
        $log.log('Layout loaded -> ' + $rootScope.meuNome);
    };

}]);

app.service('AlertService', ['$window', function ($window) {
    this.doAlert = function (msg) {
        $window.alert(msg);
    };
}]);