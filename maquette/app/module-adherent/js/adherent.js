angular.module('ModuleAdherent', ['ngRoute']);

angular.module('ModuleAdherent').config(function ($routeProvider) {
    $routeProvider.when('/adherent', {
        templateUrl: './module-adherent/templates/adherent.html',
        controller: 'ListeAdherentController',
        controllerAs: 'adherentCtrl'
    });

    $routeProvider.when('/adherent/create', {
        templateUrl: './module-adherent/templates/create_adherent.html',
        controller: 'AjouterAdherentController',
        controllerAs: 'adherentCtrl'
    });

    $routeProvider.when('/adherent/:adherent_id', {
        templateUrl: './module-adherent/templates/display_adherent.html',
        controller: 'AdherentController',
        controllerAs: 'adherentCtrl'
    });
});