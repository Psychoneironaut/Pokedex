angular.module("pokedex", []);

angular.module("pokedex").factory("Pokemon", function PokemonFactory(){
    var url = "http://pokeapi.co/api/v2/pokemon/";
    var offset = 0;
    return {
        all : function($http){
            return $http.get(url + "?offset=" + offset);
        }
    }
})