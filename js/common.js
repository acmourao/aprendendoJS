var app = angular.module("myApp", []);

app.controller('layoutController', ['$scope', 'CtrlService', function ($scope, ctrlService) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.meuNome = "zé do caixão";

    $scope.saveLayoutToAPI = function () {
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