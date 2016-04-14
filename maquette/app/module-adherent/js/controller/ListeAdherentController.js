angular.module('ModuleAdherent').controller('ListeAdherentController', ['$rootScope', '$location', 'AdherentService', function ($rootScope, $location, AdherentService) {
        var myCtrl = this;

        // Je défini l'attribut PAGE pas si il n'ai pas déjà défini
        $rootScope.page = $rootScope.page || {};
        // Je défini l'attribut TITRE de PAGE
        $rootScope.page.titre = "Liste des adhérents";
        $rootScope.page.code = "ADHERENT";
        $rootScope.sidebar = true;


        var adherents = undefined;
        myCtrl.getAdherents = function () {
            if (AdherentService.updated) {
//                adherents = undefined;
                AdherentService.getAdherents().then(function (response) {
                    adherents = response;
                }, function () {
                    adherents = -1;
                });
            } else {
                return adherents;
            }
        };

        AdherentService.getAdherents().then(function (response) {
            adherents = response;
        }, function () {
            adherents = -1;
        });

        myCtrl.showAdherent = function (id) {
            $location.path('/adherent/' + id);
        };

    }]);
