angular.module('ModuleMedia', ['ngRoute']);

angular.module('ModuleMedia').config(function ($routeProvider) {
    $routeProvider.when('/media', {
        templateUrl: './module-media/templates/media.html',
        controller: 'MediaController',
        controllerAs: 'mediaCtrl'
    });
    
    $routeProvider.when('/media/:media_id', {
        templateUrl: './module-media/templates/display_media.html',
        controller: 'MediaController',
        controllerAs: 'mediaCtrl'
    });
});

