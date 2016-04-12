
angular.module('ModuleAdherent').controller('AdherentController', ['$rootScope', '$location', 'MediaService', function ($rootScope, $location, MediaService) {
        var myCtrl = this;

        // Je défini l'attribut PAGE pas si il n'ai pas déjà défini
        $rootScope.page = $rootScope.page || {};
        // Je défini l'attribut TITRE de PAGE
        $rootScope.page.titre = "Voir un adhérents";
        $rootScope.page.code = "ADHERENT";

        myCtrl.medias = undefined;

        MediaService.getMedias().then(function (response) {
            myCtrl.medias = response;
        }, function () {
            myCtrl.medias = -1;
        });

        myCtrl.showMedia = function (id) {
            $location.path('/media/' + id);
        };

    }]);
