chatterBox.controller('UsersCtrl', function UsersCtrl($scope, $http) {

$scope.users = [];
$http.get('fixtures/users.json').success(function(data) {
    $scope.users = data;
    $scope.currentUser = getUser(3, $scope.users);
});

function getUser(id, array){
    for(i=0;i<array.length;i++){
      if(array[i].id == id){
        return array[i];
      }
    }
  }

});
