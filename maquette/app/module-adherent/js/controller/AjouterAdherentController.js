angular.module('ModuleAdherent').controller('AjouterAdherentController', ['$rootScope', 'AdherentService', function ($rootScope, AdherentService) {
        var myCtrl = this;

        // Je défini l'attribut PAGE pas si il n'ai pas déjà défini
        $rootScope.page = $rootScope.page || {};
        // Je défini l'attribut TITRE de PAGE
        $rootScope.page.titre = "Ajouter un  adhérents";
        $rootScope.page.code = "ADHERENT";

        myCtrl.medias = undefined;

        AdherentService.addAdherent().then(function (response) {
            myCtrl.medias = response;
        }, function () {
            myCtrl.medias = -1;
        });
    }]);
