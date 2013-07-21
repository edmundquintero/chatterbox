function ChatController($scope) {

  $scope.users=[
  {"name": "EdmundQ"},
  {"name": "Anonymous12"}
  ]

  $scope.currentUser = $scope.users[0];

  $scope.chatlog = [
    {"user": $scope.users[1].name,
     "message": "Fast just got faster with Nexus S."
 	},
    {"user": $scope.users[1].name,
     "message": "The Next, Next Generation tablet."
 	},
    {"user": $scope.users[1].name,
     "message": "The Next, Next Generation tablet."
 	}
  ];

  $scope.addMessage = function(){
  	$scope.chatlog.push(
      {"user": $scope.users[0].name,
       "message": this.message
      });
  }

}