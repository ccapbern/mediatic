
angular.module('ModuleAdherent').controller('AdherentController', ['$rootScope', '$routeParams', 'AdherentService', function ($rootScope, $routeParams, AdherentService) {
        var myCtrl = this;

        // Je défini l'attribut PAGE pas si il n'ai pas déjà défini
        $rootScope.page = $rootScope.page || {};
        // Je défini l'attribut TITRE de PAGE
        $rootScope.page.titre = "Voir un adh�rents";
        $rootScope.page.code = "ADHERENT";

        myCtrl.adherent = undefined;

        var id = $routeParams.adherent_id;

        AdherentService.getAdherent(id).then(function (response) {
            myCtrl.adherent = response;
        }, function () {
            myCtrl.adherent = -1;
        });
    }]);
