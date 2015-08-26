(function() {
  'use strict';

  angular
    .module('skillsRecommenderUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.person = null;
  }
})();
