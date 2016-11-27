/**
 * Created by Janko on 21. 10. 2016.
 */

angular.module('app', []);

angular.module('app').directive('customDirective', function () {
    return {
        restrict: 'E',
        template: '<h1>Živjo Kekec {{ name }} </h1>'
    };
});
