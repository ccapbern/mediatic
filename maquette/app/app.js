
// CrÃ©ation du module app avec les dÃ©pendances :
//  - ng-route : pour gÃ©rer des URL diffÃ©rentes

angular.module('App', ['ngRoute', 'ModuleMedia', 'ModuleAdherent', 'ModuleMenu']);

// Configuration du module app
// => Injection du Provider du service $route afin de le configurer.
angular.module('App').config(function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/media'
    });
});