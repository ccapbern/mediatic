angular.module('ModuleMedia').controller('ListeMediaController', ['$rootScope', '$location', 'MediaService', function ($rootScope, $location, MediaService) {
        var myCtrl = this;

        // Je défini l'attribut PAGE pas si il n'ai pas déjà défini
        $rootScope.page = $rootScope.page || {};
        // Je défini l'attribut TITRE de PAGE
        $rootScope.page.titre = "Liste des médias";
        $rootScope.page.code = "MEDIA";
        $rootScope.sidebar = true;

        var medias = undefined;
        myCtrl.getMedias = function(){
            if(MediaService.updated){
//              medias = undefined;
                MediaService.getMedias().then(function (response) {
                    medias = response;
                }, function () {
                    medias = -1;
                });
            } else {
                return medias;
            }
        };

        MediaService.getMedias().then(function (response) {
            medias = response;
        }, function () {
            medias = -1;
        });

        myCtrl.showMedia = function (id) {
            $location.path('/media/' + id);
        };

    }]);