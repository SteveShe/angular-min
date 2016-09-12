'use strict';

var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'SimpleController',
            templateUrl: 'view1.html'
        })
        .when('/view2',
        {
            controller: 'SimpleController',
            templateUrl: 'view2.html'
        })
        .otherwise({ redirectTo: '/' });
});

demoApp.factory('simpleFactory', function () {
    var family = [
        { name: 'Steve Sheppard', city: 'Houston' }
    ];
    
    var factory = {};

    factory.getFamily = function () {
        return family;
    };
    
    return factory;
});


demoApp.controller('SimpleController', function ($scope, simpleFactory) {
    $scope.family = [];
    init();
    
    function init() {
        $scope.family = simpleFactory.getFamily();
    }    

    $scope.addFamilyMember = function () {
        $scope.family.push({ name: $scope.newFamilyMember.name, city: $scope.newFamilyMember.city });
    }
});