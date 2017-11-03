service = angular.module('starter.services', [])

service.factory('Region', function() {
    // Might use a resource here that returns a JSON array
    var regions = [{
        id: 0,
        name: 'Abruzzo',
        letter: 'A',
        filter: 'ABRUZZO',
    }, {
        id: 1,
        name: 'Basilicata',
        letter: 'B',
        filter: 'BASILICATA',
    }, {
        id: 2,
        name: 'Calabria',
        letter: 'C',
        filter: 'CALABRIA',
    }, {
        id: 3,
        name: 'Campania',
        letter: 'C',
        filter: 'CAMPANIA',
    }, {
        id: 4,
        name: 'Em. Romagna',
        letter: 'E',
        filter: '',
    }, {
        id: 5,
        name: 'Friuli',
        letter: 'F',
        filter: 'FRVENGIU',
    }, {
        id: 6,
        name: 'Lazio',
        letter: 'L',
        filter: 'LAZIO',
    }, {
        id: 7,
        name: 'Liguria',
        letter: 'L',
        filter: 'LIGURIA',
    }, {
        id: 8,
        name: 'Lombardia',
        letter: 'L',
        filter: 'LOMBARDIA',
    }, {
        id: 9,
        name: 'Marche',
        letter: 'M',
        filter: 'MARCHE',
    }, {
        id: 10,
        name: 'Molise',
        letter: 'M',
        filter: 'MOLISE',
    }, {
        id: 11,
        name: 'Piemonte',
        letter: 'P',
        filter: 'PIEMONTE',
    }, {
        id: 12,
        name: 'Puglia',
        letter: 'P',
        filter: 'PUGLIA',
    }, {
        id: 13,
        name: 'Sardegna',
        letter: 'S',
        filter: 'SARDEGNA',
    }, {
        id: 14,
        name: 'Sicilia',
        letter: 'S',
        filter: 'SICILIA',
    }, {
        id: 15,
        name: 'Toscana',
        letter: 'T',
        filter: 'TOSCANA',
    }, {
        id: 16,
        name: 'Trentino',
        letter: 'T',
        filter: 'TRALTOADIG',
    }, {
        id: 17,
        name: 'Umbria',
        letter: 'U',
        filter: 'UMBRIA',
    }, {
        id: 18,
        name: 'Valle-Aosta',
        letter: 'V',
        filter: '',
    }, {
        id: 19,
        name: 'Veneto',
        letter: 'V',
        filter: 'VENETO',
    } , {
        id: 20,
        name: 'Tutte le regioni',
        letter: '',
        filter: '',
    } ];

    return {
        all: function() {
            return regions;
        },
    };
})

service.factory('Number', function() {
    var numbers = [{
        value: 1,
    }, {
        value: 2
    }, {
        value: 3
    }, {
        value: 4
    }, {
        value: 5
    }, {
        value: 6
    }, {
        value: 7
    }, {
        value: 8
    }, {
        value: 9
    }, {
        value: 10
    }];

    return {
        all: function() {
            return numbers;
        },
    };
})


service.factory('Winelist', function($http) {
    return {
        //return wines from a specific winelist - by winelist_id
        getWinelist: function(winelist_id) {
            var promise = $http.get('https://tws-middleware-staging.herokuapp.com/winelist/' + winelist_id).then(function (results) {
                return results.data["0"].data;
            });
            return promise;
        }
    };
})

service.factory('Wharehouse', function($http) {
    return {
        //return wines from a specific winelist - by winelist_id
        postWharehouseExhaust: function(navision_id, wine_id, quantity, wine_year, location_id, winemaker_name, wine_name) {
            var exhaust_date = new Date();
            var promise = $http.post('https://tws-middleware-staging.herokuapp.com/warehouseExhaust/', JSON.stringify({
                "Basket_No": "E" + exhaust_date.getTime(),
                "Download_Date": exhaust_date,
                "Customer_No": navision_id,
                "Location_Code": location_id,
                "Item_No": wine_id,
                "Variant_Code": wine_year,
                "Quantity": quantity,
                "Description": wine_name,
                "WineMaker_Name": winemaker_name
            })).then(function (results) {
                return results;
            });
            return promise;
        }
    };
})

service.factory('Utility', function($ionicPopup, $ionicHistory, $state, $timeout) {
    return {
        confirmPopup: function(title, cssClass) {
            var popup = $ionicPopup.alert({
                title: title,
                cssClass: cssClass
            }); 
            return popup
        },
        closePopup: function(popup, time) {
            $timeout(function(){
                popup.close();
            }, time)
        },
        refreshPage: function(location) {
            $ionicHistory.clearCache().then(function(){
                $state.go(location, {}, {reload: true});
            });
        }
    }

})

service.factory('User', function($http) {
    return {
        //return the navision Id of a user - by user_id
        getNavisionId: function(user_id) {
            var promise = $http.get('https://tws-middleware-staging.herokuapp.com/customer/' + user_id).then(function (results) {
                return results.data["0"].data["0"].navision_id;
            });
            return promise;
        },

        //return the active winelist id of a user - by navision_id
        getActiveWinelistId: function(navision_id) {
            var promise = $http.get('https://tws-middleware-staging.herokuapp.com/activeWinelist/' + navision_id).then(function (results) {
                return results.data["0"].data["0"].No;
            });
            return promise;
        }

    };
})
