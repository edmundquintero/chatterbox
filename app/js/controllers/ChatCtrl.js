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
      {"user": $scope.users[1],
       "message": "1 is the best room!!!!!"
      }]
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
      {"user": $scope.users[1],
       "message": "Where is room 2?"
      }]
  },
  {"id":3,
   "room": 108,
   "chatlog": [
      {"user": $scope.users[1],
       "message": "Woah now."
      },
      {"user": $scope.currentUser,
       "message": "In room 108"
      },
      {"user": $scope.users[1],
       "message": "Must have been busy out there."
      }]
  }

  ]

  $scope.chatlog = getRoom($routeParams.roomId, chatlogs).chatlog;

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



