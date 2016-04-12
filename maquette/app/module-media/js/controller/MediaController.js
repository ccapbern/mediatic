
// Récupération du module des catalogue pour y ajouter le controller
angular.module('ModuleMedia').controller('MediaController', ['$rootScope', '$routeParams', 'MediaService', function ($rootScope, $routeParams, MediaService) {
    var myCtrl = this;

    // Je défini l'attribut PAGE pas si il n'ai pas déjà défini
    $rootScope.page = $rootScope.page || {};
    // Je défini l'attribut TITRE de PAGE
    $rootScope.page.titre = "Médias";
    
    myCtrl.medias = undefined;
    myCtrl.media = undefined;
	
    // Récuparation du l'identifiant qui est le paramètre 'idLivre' de la route
    var id = $routeParams.media_id;

    MediaService.getMedia(id).then(function(media){
            myCtrl.media = media;
            console.log(myCtrl.media);
    }, function(){
            // En cas d'erreur
            myCtrl.media = -1;
    });
	
    MediaService.getMedias().then(function(response){
        myCtrl.medias = response;
    },function(){
        myCtrl.medias = -1;
    });
    
}]);