angular.module('myApp', ['pokedex', 'ui.bootstrap']);

angular.module('myApp').controller('myController', ['$scope', '$http', 'Pokemon', function ($scope, $http, Pokemon) {
        Pokemon.all($http).then(function(result){
        $scope.model = result.data.results;
    })
}]);