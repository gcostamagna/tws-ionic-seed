controllers = angular.module('starter.controllers', []);

controllers.controller('ExhaustCtrl', function($scope, $http, $cordovaToast, Number, Region, User, Winelist, Wharehouse, Utility, $ionicLoading) {
    $scope.click = false;
    $scope.wineCategory = '';
    
    $ionicLoading.show();
    //to be changed with user_id - loading the scope variable
    User.getNavisionId('58ac178cd36e205ca905da14').then(function(navision_id) {
        $scope.navision_id = navision_id;
        User.getActiveWinelistId(navision_id).then(function(winelist_id) {
            Winelist.getWinelist(winelist_id).then(function(wines) {
                $scope.wines = wines;
                $ionicLoading.hide();
            })
        })
    });

    $scope.regions = Region.all();

    $scope.numbers = Number.all();

    $scope.setWineRegion = function (region) {
        $scope.wineRegion = region;
    }

    $scope.setWineCategory = function (category) {
        $scope.wineCategory = category;
    }

    $scope.wharehouseExhaust = function (wine_id, quantity, wine_year, location_id, winemaker_name, wine_name) {
        $scope.click = true;
        Wharehouse.postWharehouseExhaust($scope.navision_id, wine_id, quantity, wine_year, location_id, winemaker_name, wine_name).then(function(results){
            var popup = Utility.confirmPopup('Magazzino aggiornato con successo.','green');
            Utility.closePopup(popup,2000);
            Utility.refreshPage('tab.exhaust');
        })
    };
})
