/**
 * Created by steve on 3/17/15.
 */

angular.module('starter').controller('HomeController', ['$scope','$state',
    function($scope, $state) {
        $scope.headerTitle = $state.current["abstract"];
        console.log($scope.headerTitle);
    }

]);

