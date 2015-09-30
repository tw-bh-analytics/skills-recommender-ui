(function() {
  'use strict';

  angular
    .module('skillsRecommenderUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($interval, $scope, $log, Restangular) {
    $scope.person = null;

    $scope.changedFeedbacks = function() {
      $scope.recommendation.forEach(function(r) {
        if (r.feedback !== null) {
          Restangular.one('person', $scope.person.id).one('recommendation', r.id).put({ feedback: r.feedback });
        }
      });
    };

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
