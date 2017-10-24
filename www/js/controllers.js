angular.module('starter.controllers', [])

    .controller('ExhaustCtrl', function($scope, $http, $cordovaToast, Regions) {

    $scope.click = function (){
        $cordovaToast.show('Here is a message', 'long', 'center').then(function(success) {
            // success
        }, function (error) {
            // error
        });
    }


    $scope.regions = Regions.all();

    $scope.setWineRegion = function (region) {
        $scope.wineRegion = region;
    }

    $scope.setWineCategory = function (category) {
        $scope.wineCategory = category;
    }

    /* Get the wine list of the logged user */
    $scope.getWineList = function () {
        $http.get('https://tws-middleware-staging.herokuapp.com/customer/58ac178cd36e205ca905da14').then(function (results) {
            $scope.navision_id = results.data["0"].data["0"].navision_id;
            $http.get('https://tws-middleware-staging.herokuapp.com/activeWinelist/' + results.data["0"].data["0"].navision_id).then(function (results) {
                $http.get('https://tws-middleware-staging.herokuapp.com/winelist/' + results.data["0"].data["0"].No).then(function (results) {
                    $scope.wines = results.data["0"].data;
                });
            });  
        })
    };

})

    .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

    .controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
