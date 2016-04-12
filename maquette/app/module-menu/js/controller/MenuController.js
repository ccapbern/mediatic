angular.module('ModuleMenu').controller('MenuController', ['$location', '$rootScope', function($location, $rootScope) {
    var self = this;
    
    self.isMediaActif = function(){
        return  $rootScope.page!==undefined && $rootScope.page.code == "MEDIA";
    };
    
    self.isAdherentActif = function(){
        return  $rootScope.page!==undefined && $rootScope.page.code == "ADHERENT";
    };
}]);
