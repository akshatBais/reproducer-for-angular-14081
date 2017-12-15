const angular = require("angular");
window["angular"] = angular; // angular-route expects it to be a global
require("angular-route");


const oldModule = angular.module("old", ["ngRoute"]);

oldModule.config(["$locationProvider", ($locationProvider) =>
  $locationProvider.html5Mode({
    enabled: true,
  })
]).component("ngViewWrapper", {
  // this wrapper is necessary because angular can't upgrade directives with more than one definition, such as ng-view ...
  template: `<ng-view></ng-view>`
}).config(["$routeProvider", ($routeProvider) => {
  $routeProvider
    .when("/", {redirectTo: "old"})
    .when("/old", {
      template: `Greetings from the legacy component`,
    });
}]);
