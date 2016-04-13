
angular.module('ModuleAdherent').controller('AdherentController', ['$rootScope', '$routeParams', 'AdherentService', 'MediaService', function ($rootScope, $routeParams, AdherentService, MediaService) {
        var myCtrl = this;

        // Je défini l'attribut PAGE pas si il n'ai pas déjà défini
        $rootScope.page = $rootScope.page || {};
        // Je défini l'attribut TITRE de PAGE
        $rootScope.page.titre = "Voir un adh�rents";

        myCtrl.adherent = undefined;

        var id = $routeParams.adherent_id;

        AdherentService.getAdherent(id).then(function (response) {
            myCtrl.adherent = response;
        }, function () {
            myCtrl.adherent = -1;
        });
        
        
        myCtrl.mediasDisponibles = undefined;

        MediaService.getMediasDisponibles().then(function (response) {
            myCtrl.mediasDisponibles = response;
        }, function () {
            myCtrl.mediasDisponibles = -1;
        });
        
        myCtrl.addEmprunteur = function(){
        	AdherentService.addEmprunteur(myCtrl.ajout.selected, id);
        	myCtrl.ajout = {};
        };
    }]);
