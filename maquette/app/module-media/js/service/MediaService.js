angular.module('ModuleMedia').service('MediaService', ['$http', function ($http) {
        var self = this;

        self.getMedias = function () {
            var url = "http://10.34.10.140:8080/resource/media.recherche";
            var promise = $http.get(url).then(function (response) {
                return response.data;
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
        
        self.addEmprunteur = function (media, emprunteur) {
            var url = "http://10.34.10.140:8080/resource/emprunt.ajout";
            var promise = $http.post(url, emprunteur.id, media.id).then(function (response) {
                console.log(response.data);
            	return response.data;
            });

            return promise;
        };
    }]);