// public/js/app.js
angular.module('socialMediaApp', [])
  .controller('AuthController', ['$scope', '$http', function($scope, $http) {
    $scope.user = {};

    $scope.login = function() {
      $http.post('/api/login', $scope.user)
        .then(function(response) {
          // Handle successful login
        }, function(error) {
          // Handle login error
        });
    };

    $scope.register = function() {
      $http.post('/api/register', $scope.user)
        .then(function(response) {
          // Handle successful registration
        }, function(error) {
          // Handle registration error
        });
    };
  }])
  .controller('ProfileController', ['$scope', '$http', function($scope, $http) {
    $scope.user = {};

    $http.get('/api/profile')
      .then(function(response) {
        $scope.user = response.data;
      });

    $scope.updateProfile = function() {
      $http.put('/api/profile', $scope.user)
        .then(function(response) {
          // Handle successful update
        }, function(error) {
          // Handle update error
        });
    };
  }]);
