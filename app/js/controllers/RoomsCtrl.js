chatterBox.controller('RoomsCtrl', function RoomsCtrl($scope, $http) {

$http.get('fixtures/chatrooms.json').success(function(data) {
    $scope.rooms = data;
});

$scope.currentRoom = {};

});