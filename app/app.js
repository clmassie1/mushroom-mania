"use strict";

const app = angular.module("MushroomApp", ["ngRoute"]);
console.log('hello');

app.config(function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl: 'partials/partial.html',
      controller: 'MushroomFactroy'
      
    }).
    otherwise('/');
    
});
