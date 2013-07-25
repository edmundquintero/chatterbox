chatterBox.controller('RoomsCtrl', function RoomsCtrl($scope, $http) {
var url = 'http://te410-15.cpcc.edu:8080/api/room?format=jsonp&callback=JSON_CALLBACK';
$scope.rooms = [];
$http.jsonp(url).
  success(function(data) {
    $scope.rooms = data;
    console.log(data);
  }).
  error(function(data) {console.log("ERROR"+data);});

$scope.currentRoom = {};

});