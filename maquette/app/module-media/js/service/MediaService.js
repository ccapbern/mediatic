angular.module('ModuleMedia').service('MediaService', ['$http', function ($http) {
        var self = this;

        var url = "http://10.34.10.140:8080/resource/media.recherche";
        var promise = undefined;

        var initPromise = function () {
            if (promise === undefined) {
                promise = $http.get(url).then(function (response) {
//                    console.log(response.data);
                    var medias = [];
                    for (var index in response.data) {
                        var itemFromServeur = response.data[index];
                        var itemForIHM = {
                            id: itemFromServeur.id,
                            titre: itemFromServeur.titre,
                            auteur: itemFromServeur.auteur,
                            type: itemFromServeur.type,
                            emprunteur: itemFromServeur.emprunteur,
                            emprunteurs: itemFromServeur.emprunteurs,
                            retour: itemFromServeur.retour
                        };
                        medias.push(itemForIHM);
                    }
                    return medias;
                });
            }
        };

        self.getMedias = function () {
            initPromise();
            return promise;
        };
        
        self.getMedia = function(id) {
            initPromise();
            return promise.then(function(liste) {
                var index = liste.findIndex(function(item) {
                    return item.id == id;
                });
                
                return liste[index];
            });
        };
    }]);