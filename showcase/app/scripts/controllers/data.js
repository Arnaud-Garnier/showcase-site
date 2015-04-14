'use strict';

angular.module('showcaseApp')
  .controller('PostCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("data.json").
      success(function(data) {
        $scope.datas = data;
      });
  });

