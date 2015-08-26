(function() {
  'use strict';

  angular
    .module('skillsRecommenderUi')
    .config(config);

  /** @ngInject */
  function config($logProvider, RestangularProvider) {
    $logProvider.debugEnabled(true);
    RestangularProvider.setBaseUrl('/api');
  }

})();
