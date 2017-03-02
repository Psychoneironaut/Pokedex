angular.module('myApp', ['pokedex', 'ui.bootstrap']);

angular.module('myApp').controller('myController', ['$scope', '$http', 'Pokemon', function ($scope, $http, Pokemon) {
    $scope.offset = 0;
    
    Pokemon.all($http).then(function (result) {
        $scope.model = result.data.results;
    })
    
    $scope.nextPage = function () {
        $scope.offset += 20;
        Pokemon.all($http, $scope.offset).then(function (result) {
        $scope.model = result.data.results;
        })
    }
    
    $scope.prevPage = function () {
        $scope.offset -= 20;
        Pokemon.all($http, $scope.offset).then(function (result) {
        $scope.model = result.data.results;
        })
    }
}]);