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
        ctrlService.save($scope);
    }
    $scope.loadLayoutFromAPI = function () {
        ctrlService.load($scope);
    };

}]);

app.controller('segundoLayoutController', ['$scope', 'CtrlService', function ($scope, ctrlService) {

    $scope.saveLayoutToAPI = function () {
        $scope.meuNome = "João Lingüiça";
        ctrlService.save($scope);
    }
    $scope.loadLayoutFromAPI = function () {
        ctrlService.load($scope);
    };

}]);

app.service('CtrlService', ['$log', function ($log) {
    this.save = function ($scope) {
        $log.log('Layout saved.' + $scope.meuNome);
    };

    this.load = function ($scope) {
        $log.log('Layout loaded.' + $scope.meuNome);
    };
}]);