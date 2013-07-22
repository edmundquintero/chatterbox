chatterBox.controller('ChatCtrl', function ChatCtrl($scope) {

  $scope.chatlog = [
    {"user": $scope.users[1],
     "message": "Fast just got faster with Nexus S."
 	},
    {"user": $scope.users[0],
     "message": "The Next, Next Generation tablet."
 	},
    {"user": $scope.users[1],
     "message": "The Next, Next Generation tablet."
 	}
  ];

  $scope.addMessage = function(){
    if($scope.message != undefined && $scope.message != ''){
      $scope.chatlog.push(
      {"user": $scope.users[0],
       "message": this.message
      });
      $scope.message = '';
    }
  }

});
