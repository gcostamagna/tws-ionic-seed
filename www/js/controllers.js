controllers = angular.module('starter.controllers', []);

controllers.controller('ExhaustCtrl', function($scope, $http, $cordovaToast, Number, Region, User, Winelist, Wharehouse, Utility, $ionicLoading, Auth) {
    $scope.auth = Auth;
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

    $scope.wharehouseExhaust = function (wine_id, quantity, wine_year, location_id, winemaker_name, wine_name, region, tipology) {
        $scope.click = true;
        Wharehouse.postWharehouseExhaust($scope.navision_id, wine_id, quantity, wine_year, location_id, winemaker_name, wine_name, region, tipology).then(function(results){
            var popup = Utility.confirmPopup('Magazzino aggiornato con successo.','green');
            Utility.closePopup(popup,2000);
            Utility.refreshPage('tab.exhaust');
        })
    };
});

controllers.controller('RectificationCtrl', function($scope, $http, $cordovaToast, Number, Region, User, Wharehouse, Utility, $ionicLoading) {
    $scope.click = false;
    $scope.wineCategory = '';

    $ionicLoading.show();
    //to be changed with user_id - loading the scope variable
    User.getNavisionId('58ac178cd36e205ca905da14').then(function(navision_id) {
        $scope.navision_id = navision_id;
        Wharehouse.getWharehouseExhaust(navision_id).then(function(wines) {
            $scope.wines = wines;
            $ionicLoading.hide();
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

    $scope.rectification = function (exhaust_id, download_date, customer_id, location_id, wine_id, wine_year, wine_name, winemaker_name, quantity, etag) {
        $scope.click = true;
        Wharehouse.exhaustRectification(exhaust_id, download_date, customer_id, location_id, wine_id, wine_year, wine_name, winemaker_name, quantity, etag).then(function(results){
            var popup = Utility.confirmPopup('Magazzino aggiornato con successo.','green');
            Utility.closePopup(popup,2000);
            Utility.refreshPage('tab.rectification');
        })
    };

})

controllers.controller('WinelistCtrl', function($scope, $http, $cordovaToast, Number, Region, User, Winelist, Wharehouse, Utility, $ionicLoading) {
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

})

controllers.controller('WharehouseCtrl', function($scope, $http, $cordovaToast, Number, Region, User, Winelist, Wharehouse, Utility, $ionicLoading) {
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

})

controllers.controller('CatalogCtrl', function($scope, $http, $cordovaToast, Number, Region, User, Catalog, Utility, $ionicLoading) {
    $scope.click = false;
    $scope.wineCategory = '';

    $ionicLoading.show();

    //to be changed with user_id - loading the scope variable
    Catalog.getCatalog().then(function(wines) {
        $scope.wines = wines;
        $ionicLoading.hide();
    });

    $scope.regions = Region.all();
    
    $scope.regions = Region.all();

    $scope.numbers = Number.all();

    $scope.setWineRegion = function (region) {
        $scope.wineRegion = region;
    }

    $scope.setWineCategory = function (category) {
        $scope.wineCategory = category;
    }

})