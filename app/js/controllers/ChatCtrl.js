chatterBox.controller('ChatCtrl', function ChatCtrl($scope, $routeParams) {


  var chatlogs = [
  {"id":0,
   "room": 0,
   "chatlog": [
      {"user": $scope.users[1],
       "message": "Room 1 again?"
      },
      {"user": $scope.currentUser,
       "message": "In Room 1"
      },
      {"user": $scope.users[0],
       "message": "1 is the best room!!!!!"
      }],
    "users":[
      {"id": 3},
      {"id": 2}
    ]
  },
  {"id":2,
   "room": 3,
   "chatlog": [
      {"user": $scope.users[1],
       "message": "A new room!"
      },
      {"user": $scope.currentUser,
       "message": "In room 3"
      },
      {"user": $scope.users[2],
       "message": "Where is room 2?"
      }],
    "users":[
      {"id": 1},
      {"id": 3}
    ]
  },
  {"id":3,
   "room": 108,
   "chatlog": [
      {"user": $scope.users[2],
       "message": "Woah now."
      },
      {"user": $scope.currentUser,
       "message": "In room 108"
      },
      {"user": $scope.users[2],
       "message": "Must have been busy out there."
      }],
    "users":[
      {"id": 0},
      {"id": 2}
    ]
  }

  ]

  $scope.currentRoom = getRoom($routeParams.roomId, chatlogs);
  $scope.chatlog = $scope.currentRoom.chatlog;
  $scope.usersInRoom = getUsersInRoom();
  console.log($scope.usersInRoom);
  function getUsersInRoom(){
    var inroom = [];
    for(user in $scope.currentRoom.users){
      console.log(user);
      inroom.push(getUser(user, $scope.users));
    }
    return inroom;
  }

  $scope.addMessage = function(){
    if($scope.message != undefined && $scope.message != ''){
      $scope.chatlog.push(
      {"user": $scope.currentUser,
       "message": this.message
      });
      $scope.message = '';
    }
  }

  function getRoom(id, array){
    for(i=0;i<array.length;i++){
      if(array[i].id == id){
        return array[i];
      }
    }
  }
});



