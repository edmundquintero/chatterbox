var chatterBox = angular.module('chatterBox',[]);

chatterBox.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	  when('/room/:roomId', {templateUrl: 'partials/chatbox.html', controller: 'ChatCtrl' }).
	  otherwise({redirectTo: '/room/1'});
}]);

