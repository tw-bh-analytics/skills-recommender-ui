(function() {
  'use strict';

  angular
    .module('skillsRecommenderUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($interval, $scope, $log, Restangular) {
    $scope.person = null;

    $scope.personFn = function(selected) {
      $scope.person = selected.originalObject;
      if ($scope.person !== null) {
        Restangular.one('person', $scope.person.id).getList('recommendation').then(function(recommendation) {
          $scope.recommendation = recommendation;
        });
      }
    };
  }
})();
