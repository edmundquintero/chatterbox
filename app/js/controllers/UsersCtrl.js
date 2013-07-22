chatterBox.controller('UsersCtrl', function UsersCtrl($scope) {

  $scope.users=[
  {"name": "EdmundQ"},
  {"name": "Anonymous12"},
  {"name": "Anonymous23"},
  {"name": "Anonymous108"}
  ]

  $scope.currentUser = $scope.users[0];

});
