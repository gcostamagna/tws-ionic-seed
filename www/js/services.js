angular.module('starter.services', [])

    .factory('Regions', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
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
    } ];

    return {
        all: function() {
            return regions;
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});
