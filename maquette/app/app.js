
// Création du module app avec les dépendances :
//  - ng-route : pour gérer des URL différentes
angular.module('App', ['ngRoute', 'ModuleMedia']);

// Configuration du module app
// => Injection du Provider du service $route afin de le configurer.
angular.module('App').config(function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/media'
    });
});