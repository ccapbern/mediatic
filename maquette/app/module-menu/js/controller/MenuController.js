angular.module('ModuleMenu').controller('MenuController', ['$location', function($location) {
    var self = this;
    
    self.isMediaActif = function(){
      if($location.path == "/media"){
      return true;    
      }else{
          return false;
      }
    };
    
    self.isAdherentActif = function(){
      if($location.path == "/adherent"){
      return true;    
      }else{
          return false;
      }
    };
    
}]);
