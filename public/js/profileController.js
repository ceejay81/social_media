// /public/scripts/profileController.js
angular.module('socialMediaApp', [])
  .controller('ProfileController', ['$scope', '$http', function($scope, $http) {
    // Fetch user profile
    $http.get('/api/profile').then(function(response) {
      $scope.user = response.data;
    });

    // Update user profile
    $scope.updateProfile = function() {
      $http.put('/api/profile', $scope.user).then(function(response) {
        alert('Profile updated successfully');
      }, function(error) {
        alert('Error updating profile');
      });
    };
  }]);
