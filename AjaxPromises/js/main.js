/**
 * Created by janko on 13/10/2016.
 */

angular.module('app', []);
angular.module('app').controller('MainController', function ($scope, $q, $http) {
    $scope.status = "";
    $scope.cars = [];
    $scope.test = "Danes je lep dan";
    // runs when Fire button is clicked
    $scope.fire = function () {
        $scope.status = "Loading ... ";

        var promise = getPromise();
        promise.then(function (success) {
            $scope.status = success;
            return getPromise();
        }, function (error) {
            $scope.status = error;
            return error;
        }).then(function (success2) {
            $scope.staus = success2 + ' 2';
        }, function (error2) {
            $scope.status = error2 + ' 2';
        });

    };
    // runs when load button is clicked
    $scope.loadCars = function(){
      $http.get('http://smartninja.betoo.si/api/CMW/cars').then(function(response){
        $scope.cars = response.data;
      }, function (errorResponse) {
          $scope.status = "Poba ni uspelo";
      });
    };

    // make reservation $http post request
    $scope.makeReservation = function (timeslot, email) {
      var data = {
          timeslotId: timeslot,
          email: email
      };

      $http.post('http://smartninja.betoo.si/api/CMW/reservations', data).then(function (response) {
            $scope.message = response.data.status;
            console.log($scope.message);
        }, function (errorResponse) {
          $scope.message = "Prišlo je do napake!!";
      });
    };

    function getPromise() {
        var deferred = $q.defer();

        // fake body
        setTimeout(function () {
            if(Math.round(Math.random())){
                // is true
                deferred.resolve('Success');

            }else{
                // is false
                deferred.reject('Fail');
            }
        }, 2000);
        return deferred.promise;
    }

});
