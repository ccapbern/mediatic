angular.module('ModuleAdherent').service('AdherentService', ['$http', function ($http) {
        var self = this;

        self.getAdherents = function () {
            var url = "http://10.34.10.140:8080/resource/adherent.recherche";
            var promise = $http.get(url).then(function (response) {
                return response.data;
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
    }]);