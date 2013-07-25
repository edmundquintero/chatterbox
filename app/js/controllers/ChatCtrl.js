chatterBox.controller('ChatCtrl', function ChatCtrl($scope, $routeParams, $http) {

$scope.chatlog = [];
var url = 'http://te410-15.cpcc.edu:8080/api/room/'+$routeParams.roomId+"?format=jsonp&callback=JSON_CALLBACK"
$http.jsonp(url).
  success(function(data) {
    $scope.chatlogs = data.chatlogs;
    console.log($scope.chatlogs);
  }).
  error(function(data) {console.log("Error"+data);});


  $scope.addMessage = function(){
    if($scope.message != undefined && $scope.message != ''){
      $scope.chatlog.push(
      {"user": $scope.currentUser,
       "message": this.message
      });
      $scope.message = '';
    }
  }

});



