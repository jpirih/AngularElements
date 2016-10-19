/**
 * Created by janko on 17/10/2016.
 */
angular.module('app', []);

angular.module('app').controller('MainController', function ($scope, DataFactory) {
    $scope.data = DataFactory;
    $scope.$on('user.register', function (event, data) {
       $scope.data = data;
    });
});

angular.module('app').controller('EmitterController', function ($scope, $rootScope, DataFactory) {
    $scope.fire = function () {
        $rootScope.$broadcast('user.register', {name:'Janko'});
    }
    
});

// first factory
angular.module('app').factory('DataFactory', function () {
    var result = {
        name: 'Janez',
        surname: 'Novak',
        getName: function () {
            return 'Moje ime ';
        }
    };

    return result
});

