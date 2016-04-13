angular.module('ModuleAdherent').service('AdherentService', ['$http', function ($http) {
        var self = this;

        self.getAdherents = function () {
            var url = "http://10.34.10.140:8080/resource/adherent.recherche";
            var promise = $http.get(url).then(function (response) {
                return response.data;
            });

            return promise;
        };
        
        self.getAdherentsActifs = function () {
            var url = "http://10.34.10.140:8080/resource/adherent.recherche";
            var promise = $http.get(url).then(function (response) {
                var adherentsActifs = [];
            	for (var i = 0; i < response.data.length; i++){
            		var adherent = response.data[i];
            		if (adherent.cotisation_correcte){
            			adherentsActifs.push(adherent);
            		}
            	}
            	return adherentsActifs;
            });

            return promise;
        };

        self.getAdherent = function (id) {
            var url = "http://10.34.10.140:8080/resource/adherent.accession";
            var promise = $http.get(url, {params: {id: id}}).then(function (response) {
                var data = response.data;
                data.date_naissance = new Date(data.date_naissance);
                data.cotisation.debut = new Date(data.cotisation.debut);
                data.cotisation.fin = new Date(data.cotisation.fin);
                return data;
            });

            return promise;
        };

        self.addAdherent = function (adherent) {
            var url = "http://10.34.10.140:8080/resource/adherent.creation";
            var promise = $http.post(url, adherent).then(function (response) {
                return response.data;
            });

            return promise;
        };
        
        self.addEmprunteur = function (media, idEmprunteur) {
            var url = "http://10.34.10.140:8080/resource/emprunt.ajout";
            var promise = $http.post(url, idEmprunteur, media.id).then(function (response) {
            	return response.data;
            },function(response){
            	return response.data;
            });

            return promise;
        };
    }]);