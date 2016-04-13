angular.module('ModuleSidebar').controller('SidebarController', ['$location', '$rootScope', 'MediaService', function($location, $rootScope, MediaService) {
    var self = this;
    
    
    self.isMediaActif = function(){
        return  $rootScope.page!==undefined && $rootScope.page.code == "MEDIA";
    };
    
    self.isAdherentActif = function(){
        return  $rootScope.page!==undefined && $rootScope.page.code == "ADHERENT";
    };
    
    self.submitMedia = function(){
        var filtres = {
            titre : self.title,
            auteur : self.author,
            type : self.type
        }
        MediaService.setFilters(filtres)
        return true;
    };
    
    self.submitAdherent = function(){
        //TODO
        return true;
    };
}]);