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
  .when('/fixt',{
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

//service
myApp.service('myService',function(){
  var vm= this;
  vm.api = '';
});


//Controllers

myApp.controller('homeController',['$scope','$http','$resource',function($scope,$http,$resource){
  var vm = this;
  vm.getData = $resource('http://api.football-data.org/v1/soccerseasons').query();
  console.log(vm.getData);
}]);


myApp.controller('teamsController',['$scope','$resource','myService','$routeParams',function($scope,$resource,myService,$routeParams){
  var vm = this;
  var id = $routeParams.Unique_id;
  vm.getData = $resource('http://api.football-data.org/v1/soccerseasons/'+ id +'/leagueTable').get();
  console.log(vm.getData);

  vm.getApi = function(api){
    myService.api = api;
  }

}]);

myApp.controller('fixtController',['$scope','$resource','myService',function($scope,$resource,myService){
  var vm = this;
  vm.getApi =  myService.api;
  vm.getFixt = $resource(vm.getApi+'/fixtures').get();
  console.log(vm.getFixt);
  vm.getPlayers = $resource(vm.getApi+'/players').get();
  console.log(vm.getPlayers);
}]);

myApp.controller('pointsController',['$scope','$resource',function($scope,$resource){
  var vm = this;

}]);
