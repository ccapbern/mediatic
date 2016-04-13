angular.module('ModuleMedia').service('MediaService', ['$http', function ($http) {
        var self = this;

        self.getMedias = function () {
            var url = "http://10.34.10.140:8080/resource/media.recherche";
            var promise = $http.get(url).then(function (response) {
                return response.data;
            });

            return promise;
        };
        
        self.getMediasDisponibles = function () {
            var url = "http://10.34.10.140:8080/resource/media.recherche";
            var promise = $http.get(url).then(function (response) {
                var mediasDisponibles = [];
            	for (var i = 0; i < response.data.length; i++){
            		var media = response.data[i];
            		if (media.emprunteur == null || media.emprunteur == []){
            			mediasDisponibles.push(media);
            		}
            	}
            	return mediasDisponibles;
            });

            return promise;
        };

        self.getMedia = function (id) {
            var url = "http://10.34.10.140:8080/resource/media.accession";
            var promise = $http.get(url, {params: {id: id}}).then(function (response) {
                return response.data;
            });

            return promise;
        };

        self.addMedia = function (media) {
            var url = "http://10.34.10.140:8080/resource/media.creation";
            var promise = $http.post(url, media).then(function (response) {
                return response.data;
            });
            
            return promise;
        };
        
        self.addEmprunteur = function (idMedia, emprunteur) {
            var url = "http://10.34.10.140:8080/resource/emprunt.ajout";
            var promise = $http.post(url, emprunteur.id, idMedia).then(function (response) {
            	return response.data;
            },function(response){
            	return response.data;
            });

            return promise;
        };
    }]);