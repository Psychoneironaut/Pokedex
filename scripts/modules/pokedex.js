angular.module("pokedex", []);

angular.module("pokedex").factory("Pokemon", function PokemonFactory(){
    var url = "http://pokeapi.co/api/v2/pokemon/";
    return {
        all : function($http, offset){
            if(!offset){
                offset = 0;
            }
            return $http.get(url + "?offset=" + offset);
        }
    }
})