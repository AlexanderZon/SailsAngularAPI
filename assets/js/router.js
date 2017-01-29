'use strict';

angularApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/', {
      templateUrl: '/templates/index.html',
      controller: 'IndexController'
    })
    .when('/users', {
      templateUrl: '/templates/users.html',
      controller: 'UsersController'
    })
    .when('/employers', {
      templateUrl: '/templates/employers.html',
      controller: 'EmployersController'
    })
    .when('/clients', {
      templateUrl: '/templates/clients.html',
      controller: 'ClientsController'
    })
    .otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })

  }]);