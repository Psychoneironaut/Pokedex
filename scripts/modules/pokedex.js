angular.module("pokedex").factory("Pokemon", function ProductFactory(){
    return {
        all : function($http){
            return $http.get("http://pokeapi.co/api/v2/pokemon/");
        }
    }
})