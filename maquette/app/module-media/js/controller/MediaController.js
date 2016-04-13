
// Récupération du module des catalogue pour y ajouter le controller
angular.module('ModuleMedia').controller('MediaController', ['$rootScope', '$routeParams', 'MediaService', 'AdherentService', function ($rootScope, $routeParams, MediaService, AdherentService) {
        var myCtrl = this;

        // Je définis l'attribut PAGE pas si il n'ai pas déjà défini
        $rootScope.page = $rootScope.page || {};
        // Je définis l'attribut TITRE de PAGE
        $rootScope.page.titre = "Voir un médias";

        myCtrl.media = undefined;

        // Récuparation de l'identifiant qui est le paramètre 'idLivre' de la route
        var id = $routeParams.media_id;

        MediaService.getMedia(id).then(function (media) {
            myCtrl.media = media;
        }, function () {
            // En cas d'erreur
            myCtrl.media = -1;
        });
        
        
        myCtrl.adherents = undefined;

        AdherentService.getAdherents().then(function (response) {
            myCtrl.adherents = response;
        }, function () {
            myCtrl.adherents = -1;
        });
        
        myCtrl.addEmprunteur = function(){
        	MediaService.addEmprunteur(myCtrl.media, myCtrl.ajout.selected);
        	myCtrl.ajout = {};
        };
    }]);