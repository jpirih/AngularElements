/**
 * Created by Janko on 21. 10. 2016.
 */

angular.module('app', []);

angular.module('app').directive('customDirective', function () {
    return {
        scope:{
            asdf: '='
        },
        restrict: 'A,E',
        templateUrl:'templates/custom-directive.html',
        controller: CustomDirectiveContoller,
        link: function (scope, element, attributes) {

        }
    };
});

function CustomDirectiveContoller($scope) {
    $scope.name = 'Ema';
}