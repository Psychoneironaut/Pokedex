angular.module('myApp', ['ui.bootstrap']);

angular.module('myApp').controller('myController', ['$scope', '$http', 'Pokemon', function ($scope, $http, Product) {
    Pokemon.all($http).then(function(result){
        $scope.model = result.data;
    })
}]);