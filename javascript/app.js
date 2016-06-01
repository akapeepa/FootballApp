var myApp = angular.module('myApp',['ngRoute','ngResource']);

//Routes
myApp.config(function($routeProvider,$httpProvider){
  $httpProvider.defaults.headers.get = {'X-Auth-Token' : 'cd444c4fe0cc4369b33df697ce94d402'}
  $routeProvider
  .when('/',{
    templateUrl:'pages/home.htm',
    controller:'homeController',
    controllerAs:'hc'
  })
  .when('/teams/:Unique_id',{
    templateUrl:'pages/teams.htm',
    controller:'teamsController',
    controllerAs:'tc'
  })
  .when('/fixt/:Unique_id',{
    templateUrl:'pages/fixt.htm',
    controller:'fixtController',
    controllerAs:'fc'
  })
  .when('/points',{
    templateUrl:'pages/points.htm',
    controller:'pointsController',
    controllerAs:'pc'
  })
});

//Controllers

myApp.controller('homeController',['$scope','$http','$resource',function($scope,$http,$resource){
  var vm = this;
  vm.getData = $resource('http://api.football-data.org/v1/soccerseasons').query();
  console.log(vm.getData);
}]);


myApp.controller('teamsController',['$scope','$resource','$routeParams',function($scope,$resource,$routeParams){
  var vm = this;
  var id = $routeParams.Unique_id;
  vm.getData = $resource('http://api.football-data.org/v1/soccerseasons/'+ id +'/leagueTable').get();
  console.log(vm.getData);

}]);

myApp.controller('fixtController',['$scope','$resource','$routeParams',function($scope,$resource,routeParams){
  var vm = this;
  var id = $routeParams.Unique_id;
  vm.getData = $resource('');

}]);

myApp.controller('pointsController',['$scope','$resource',function($scope,$resource){
  var vm = this;

}]);
