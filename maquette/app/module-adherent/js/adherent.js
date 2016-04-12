angular.module('ModuleAdherent', ['ngRoute']);

angular.module('ModuleAdherent').config(function($routeProvider) {
    $routeProvider.when('/adherent', {
		templateUrl : './module-adherent/templates/adherent.html',
		controller : 'AdherentController',
		controllerAs : 'adherentCtrl'
    });
});