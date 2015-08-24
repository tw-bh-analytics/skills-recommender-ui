(function() {
  'use strict';

  angular
    .module('skillsRecommenderUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
