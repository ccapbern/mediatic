angular.module('moduleAdherent', ['ngRoute']);

angular.module('moduleAdherent').config(function($routeProvider) {
    $routeProvider.when('/adherent', {
		templateUrl : './module-adherent/templates/adherent.html',
		controller : 'AdherentController',
		controllerAs : 'adherentCtrl'
    });
});