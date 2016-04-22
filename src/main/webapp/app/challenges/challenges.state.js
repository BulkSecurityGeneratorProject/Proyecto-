(function () {
    'use strict';

    angular
        .module('pfgApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('challenges', {
            abstract: true,
            parent: 'app'
        });
    }
})();

