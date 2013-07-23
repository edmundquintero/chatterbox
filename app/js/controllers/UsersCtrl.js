chatterBox.controller('UsersCtrl', function UsersCtrl($scope, $http) {

$scope.users = [];
$scope.usersInRoom = [];
$http.get('fixtures/users.json').success(function(data) {
    $scope.users = data;
    $scope.currentUser = getUser(3, $scope.users);
});

});

var getUser = function(id, array){
    for(i=0;i<array.length;i++){
      if(array[i].id == id){
        return array[i];
      }
    }
  }