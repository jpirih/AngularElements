/**
 * Created by Janko on 12. 10. 2016.
 */
angular.module('app', []);
// select controller
angular.module('app').controller('SelectController', function ($scope) {
    // instanciranje spremenljivk;
    $selectedStudent = null;
    $scope.students = [
        {
            id: 1,
            name: 'Janez',
            age: 21
        },
        {
            id: 2,
            name: 'Micka',
            age: 23
        },
        {
            id: 3,
            name: 'Ema',
            age: 18
        },
        {
            id: 4,
            name: 'Ana',
            age: 31
        }
    ]
});

// watch controller -> watching change from controller
angular.module('app').controller('WatchController', function ($scope) {
    $scope.$watch('data', function (newValue) {
        $scope.data = newValue;
    });
});