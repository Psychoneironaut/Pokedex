angular.module('myApp', ['pokedex', 'ui.bootstrap']);

angular.module('myApp').controller('myController', ['$scope', '$http', 'Pokemon', function ($scope, $http, Pokemon) {
    $scope.offset = 0;
    
    Pokemon.all($http).then(function (result) {
        $scope.model = result.data.results;
    })
    
    $scope.getSpecies = function(name){
        Pokemon.species($http, name).then(function (result) {
            $scope.species = result.data;
        })    
    }
    
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
    
    $scope.moreInfo = false;
    
}]);

angular.module('myApp').filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
