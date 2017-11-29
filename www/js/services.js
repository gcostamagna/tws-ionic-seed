service = angular.module('starter.services', [])

service.factory('Region', function() {
    // Might use a resource here that returns a JSON array
    var regions = [
        {
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
            filter: 'EMROMAGNA',
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
        }, "TOSCANA" = {
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
        single: function(region) {
            return regions[region].name;
        }
    };
})

/**service.factory('SuggestedPrice', function() {
    var table = [
        {
            "Prezzo di acquisto": "2,1",
            "Moltiplicatore": 5
        },
        {
            "Prezzo di acquisto": "2,2",
            "Moltiplicatore": 5
        },
        {
            "Prezzo di acquisto": "2,3",
            "Moltiplicatore": 5
        },
        {
            "Prezzo di acquisto": "2,4",
            "Moltiplicatore": 5
        },
        {
            "Prezzo di acquisto": "2,5",
            "Moltiplicatore": 5
        },
        {
            "Prezzo di acquisto": "2,6",
            "Moltiplicatore": "4,9"
        },
        {
            "Prezzo di acquisto": "2,7",
            "Moltiplicatore": "4,8"
        },
        {
            "Prezzo di acquisto": "2,8",
            "Moltiplicatore": "4,7"
        },
        {
            "Prezzo di acquisto": "2,9",
            "Moltiplicatore": "4,6"
        },
        {
            "Prezzo di acquisto": 3,
            "Moltiplicatore": "4,5"
        },
        {
            "Prezzo di acquisto": "3,1",
            "Moltiplicatore": "4,5"
        },
        {
            "Prezzo di acquisto": "3,2",
            "Moltiplicatore": "4,4"
        },
        {
            "Prezzo di acquisto": "3,3",
            "Moltiplicatore": "4,4"
        },
        {
            "Prezzo di acquisto": "3,4",
            "Moltiplicatore": "4,3"
        },
        {
            "Prezzo di acquisto": "3,5",
            "Moltiplicatore": "4,3"
        },
        {
            "Prezzo di acquisto": "3,6",
            "Moltiplicatore": "4,2"
        },
        {
            "Prezzo di acquisto": "3,7",
            "Moltiplicatore": "4,2"
        },
        {
            "Prezzo di acquisto": "3,8",
            "Moltiplicatore": "4,1"
        },
        {
            "Prezzo di acquisto": "3,9",
            "Moltiplicatore": "4,1"
        },
        {
            "Prezzo di acquisto": 4,
            "Moltiplicatore": 4
        },
        {
            "Prezzo di acquisto": "4,1",
            "Moltiplicatore": 4
        },
        {
            "Prezzo di acquisto": "4,2",
            "Moltiplicatore": "3,9"
        },
        {
            "Prezzo di acquisto": "4,3",
            "Moltiplicatore": "3,9"
        },
        {
            "Prezzo di acquisto": "4,4",
            "Moltiplicatore": "3,8"
        },
        {
            "Prezzo di acquisto": "4,5",
            "Moltiplicatore": "3,8"
        },
        {
            "Prezzo di acquisto": "4,6",
            "Moltiplicatore": "3,7"
        },
        {
            "Prezzo di acquisto": "4,7",
            "Moltiplicatore": "3,65"
        },
        {
            "Prezzo di acquisto": "4,8",
            "Moltiplicatore": "3,6"
        },
        {
            "Prezzo di acquisto": "4,9",
            "Moltiplicatore": "3,55"
        },
        {
            "Prezzo di acquisto": 5,
            "Moltiplicatore": "3,5"
        },
        {
            "Prezzo di acquisto": "5,1",
            "Moltiplicatore": "3,45"
        },
        {
            "Prezzo di acquisto": "5,2",
            "Moltiplicatore": "3,4"
        },
        {
            "Prezzo di acquisto": "5,3",
            "Moltiplicatore": "3,35"
        },
        {
            "Prezzo di acquisto": "5,4",
            "Moltiplicatore": "3,3"
        },
        {
            "Prezzo di acquisto": "5,5",
            "Moltiplicatore": "3,25"
        },
        {
            "Prezzo di acquisto": "5,6",
            "Moltiplicatore": "3,2"
        },
        {
            "Prezzo di acquisto": "5,7",
            "Moltiplicatore": "3,15"
        },
        {
            "Prezzo di acquisto": "5,8",
            "Moltiplicatore": "3,1"
        },
        {
            "Prezzo di acquisto": "5,9",
            "Moltiplicatore": "3,05"
        },
        {
            "Prezzo di acquisto": 6,
            "Moltiplicatore": 3
        },
        {
            "Prezzo di acquisto": "6,1",
            "Moltiplicatore": "2,98"
        },
        {
            "Prezzo di acquisto": "6,2",
            "Moltiplicatore": "2,96"
        },
        {
            "Prezzo di acquisto": "6,3",
            "Moltiplicatore": "2,94"
        },
        {
            "Prezzo di acquisto": "6,4",
            "Moltiplicatore": "2,92"
        },
        {
            "Prezzo di acquisto": "6,5",
            "Moltiplicatore": "2,9"
        },
        {
            "Prezzo di acquisto": "6,6",
            "Moltiplicatore": "2,88"
        },
        {
            "Prezzo di acquisto": "6,7",
            "Moltiplicatore": "2,86"
        },
        {
            "Prezzo di acquisto": "6,8",
            "Moltiplicatore": "2,84"
        },
        {
            "Prezzo di acquisto": "6,9",
            "Moltiplicatore": "2,82"
        },
        {
            "Prezzo di acquisto": 7,
            "Moltiplicatore": "2,8"
        },
        {
            "Prezzo di acquisto": "7,1",
            "Moltiplicatore": "2,79"
        },
        {
            "Prezzo di acquisto": "7,2",
            "Moltiplicatore": "2,78"
        },
        {
            "Prezzo di acquisto": "7,3",
            "Moltiplicatore": "2,77"
        },
        {
            "Prezzo di acquisto": "7,4",
            "Moltiplicatore": "2,76"
        },
        {
            "Prezzo di acquisto": "7,5",
            "Moltiplicatore": "2,75"
        },
        {
            "Prezzo di acquisto": "7,6",
            "Moltiplicatore": "2,74"
        },
        {
            "Prezzo di acquisto": "7,7",
            "Moltiplicatore": "2,73"
        },
        {
            "Prezzo di acquisto": "7,8",
            "Moltiplicatore": "2,72"
        },
        {
            "Prezzo di acquisto": "7,9",
            "Moltiplicatore": "2,71"
        },
        {
            "Prezzo di acquisto": 8,
            "Moltiplicatore": "2,7"
        },
        {
            "Prezzo di acquisto": "8,1",
            "Moltiplicatore": "2,69"
        },
        {
            "Prezzo di acquisto": "8,2",
            "Moltiplicatore": "2,68"
        },
        {
            "Prezzo di acquisto": "8,3",
            "Moltiplicatore": "2,67"
        },
        {
            "Prezzo di acquisto": "8,4",
            "Moltiplicatore": "2,66"
        },
        {
            "Prezzo di acquisto": "8,5",
            "Moltiplicatore": "2,65"
        },
        {
            "Prezzo di acquisto": "8,6",
            "Moltiplicatore": "2,64"
        },
        {
            "Prezzo di acquisto": "8,7",
            "Moltiplicatore": "2,63"
        },
        {
            "Prezzo di acquisto": "8,8",
            "Moltiplicatore": "2,62"
        },
        {
            "Prezzo di acquisto": "8,9",
            "Moltiplicatore": "2,61"
        },
        {
            "Prezzo di acquisto": 9,
            "Moltiplicatore": "2,6"
        },
        {
            "Prezzo di acquisto": "9,1",
            "Moltiplicatore": "2,59"
        },
        {
            "Prezzo di acquisto": "9,2",
            "Moltiplicatore": "2,58"
        },
        {
            "Prezzo di acquisto": "9,3",
            "Moltiplicatore": "2,57"
        },
        {
            "Prezzo di acquisto": "9,4",
            "Moltiplicatore": "2,56"
        },
        {
            "Prezzo di acquisto": "9,5",
            "Moltiplicatore": "2,55"
        },
        {
            "Prezzo di acquisto": "9,6",
            "Moltiplicatore": "2,54"
        },
        {
            "Prezzo di acquisto": "9,7",
            "Moltiplicatore": "2,53"
        },
        {
            "Prezzo di acquisto": "9,8",
            "Moltiplicatore": "2,52"
        },
        {
            "Prezzo di acquisto": "9,9",
            "Moltiplicatore": "2,51"
        },
        {
            "Prezzo di acquisto": 10,
            "Moltiplicatore": "2,5"
        },
        {
            "Prezzo di acquisto": "10,1",
            "Moltiplicatore": "2,49"
        },
        {
            "Prezzo di acquisto": "10,2",
            "Moltiplicatore": "2,48"
        },
        {
            "Prezzo di acquisto": "10,3",
            "Moltiplicatore": "2,47"
        },
        {
            "Prezzo di acquisto": "10,4",
            "Moltiplicatore": "2,46"
        },
        {
            "Prezzo di acquisto": "10,5",
            "Moltiplicatore": "2,45"
        },
        {
            "Prezzo di acquisto": "10,6",
            "Moltiplicatore": "2,44"
        },
        {
            "Prezzo di acquisto": "10,7",
            "Moltiplicatore": "2,43"
        },
        {
            "Prezzo di acquisto": "10,8",
            "Moltiplicatore": "2,42"
        },
        {
            "Prezzo di acquisto": "10,9",
            "Moltiplicatore": "2,41"
        },
        {
            "Prezzo di acquisto": 11,
            "Moltiplicatore": "2,4"
        },
        {
            "Prezzo di acquisto": "11,1",
            "Moltiplicatore": "2,39"
        },
        {
            "Prezzo di acquisto": "11,2",
            "Moltiplicatore": "2,38"
        },
        {
            "Prezzo di acquisto": "11,3",
            "Moltiplicatore": "2,37"
        },
        {
            "Prezzo di acquisto": "11,4",
            "Moltiplicatore": "2,36"
        },
        {
            "Prezzo di acquisto": "11,5",
            "Moltiplicatore": "2,35"
        },
        {
            "Prezzo di acquisto": "11,6",
            "Moltiplicatore": "2,34"
        },
        {
            "Prezzo di acquisto": "11,7",
            "Moltiplicatore": "2,33"
        },
        {
            "Prezzo di acquisto": "11,8",
            "Moltiplicatore": "2,32"
        },
        {
            "Prezzo di acquisto": "11,9",
            "Moltiplicatore": "2,31"
        },
        {
            "Prezzo di acquisto": 12,
            "Moltiplicatore": "2,3"
        },
        {
            "Prezzo di acquisto": "12,1",
            "Moltiplicatore": "2,29"
        },
        {
            "Prezzo di acquisto": "12,2",
            "Moltiplicatore": "2,28"
        },
        {
            "Prezzo di acquisto": "12,3",
            "Moltiplicatore": "2,27"
        },
        {
            "Prezzo di acquisto": "12,4",
            "Moltiplicatore": "2,26"
        },
        {
            "Prezzo di acquisto": "12,5",
            "Moltiplicatore": "2,25"
        },
        {
            "Prezzo di acquisto": "12,6",
            "Moltiplicatore": "2,24"
        },
        {
            "Prezzo di acquisto": "12,7",
            "Moltiplicatore": "2,23"
        },
        {
            "Prezzo di acquisto": "12,8",
            "Moltiplicatore": "2,22"
        },
        {
            "Prezzo di acquisto": "12,9",
            "Moltiplicatore": "2,21"
        },
        {
            "Prezzo di acquisto": 13,
            "Moltiplicatore": "2,2"
        },
        {
            "Prezzo di acquisto": "13,1",
            "Moltiplicatore": "2,19"
        },
        {
            "Prezzo di acquisto": "13,2",
            "Moltiplicatore": "2,18"
        },
        {
            "Prezzo di acquisto": "13,3",
            "Moltiplicatore": "2,17"
        },
        {
            "Prezzo di acquisto": "13,4",
            "Moltiplicatore": "2,16"
        },
        {
            "Prezzo di acquisto": "13,5",
            "Moltiplicatore": "2,15"
        },
        {
            "Prezzo di acquisto": "13,6",
            "Moltiplicatore": "2,14"
        },
        {
            "Prezzo di acquisto": "13,7",
            "Moltiplicatore": "2,13"
        },
        {
            "Prezzo di acquisto": "13,8",
            "Moltiplicatore": "2,12"
        },
        {
            "Prezzo di acquisto": "13,9",
            "Moltiplicatore": "2,11"
        },
        {
            "Prezzo di acquisto": 14,
            "Moltiplicatore": "2,1"
        },
        {
            "Prezzo di acquisto": "14,1",
            "Moltiplicatore": "2,09"
        },
        {
            "Prezzo di acquisto": "14,2",
            "Moltiplicatore": "2,08"
        },
        {
            "Prezzo di acquisto": "14,3",
            "Moltiplicatore": "2,07"
        },
        {
            "Prezzo di acquisto": "14,4",
            "Moltiplicatore": "2,06"
        },
        {
            "Prezzo di acquisto": "14,5",
            "Moltiplicatore": "2,05"
        },
        {
            "Prezzo di acquisto": "14,6",
            "Moltiplicatore": "2,04"
        },
        {
            "Prezzo di acquisto": "14,7",
            "Moltiplicatore": "2,03"
        },
        {
            "Prezzo di acquisto": "14,8",
            "Moltiplicatore": "2,02"
        },
        {
            "Prezzo di acquisto": "14,9",
            "Moltiplicatore": "2,01"
        },
        {
            "Prezzo di acquisto": 15,
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "15,1",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "15,2",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "15,3",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "15,4",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "15,5",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "15,6",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "15,7",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "15,8",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "15,9",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": 16,
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "16,1",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "16,2",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "16,3",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "16,4",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "16,5",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "16,6",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "16,7",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "16,8",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "16,9",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": 17,
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "17,1",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "17,2",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "17,3",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "17,4",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "17,5",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "17,6",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "17,7",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "17,8",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "17,9",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": 18,
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "18,1",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "18,2",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "18,3",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "18,4",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "18,5",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "18,6",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "18,7",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "18,8",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "18,9",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": 19,
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "19,1",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "19,2",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "19,3",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "19,4",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "19,5",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "19,6",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "19,7",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "19,8",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "19,9",
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": 20,
            "Moltiplicatore": 2
        },
        {
            "Prezzo di acquisto": "20,1",
            "Moltiplicatore": "1,999"
        },
        {
            "Prezzo di acquisto": "20,2",
            "Moltiplicatore": "1,998"
        },
        {
            "Prezzo di acquisto": "20,3",
            "Moltiplicatore": "1,997"
        },
        {
            "Prezzo di acquisto": "20,4",
            "Moltiplicatore": "1,996"
        },
        {
            "Prezzo di acquisto": "20,5",
            "Moltiplicatore": "1,995"
        },
        {
            "Prezzo di acquisto": "20,6",
            "Moltiplicatore": "1,994"
        },
        {
            "Prezzo di acquisto": "20,7",
            "Moltiplicatore": "1,993"
        },
        {
            "Prezzo di acquisto": "20,8",
            "Moltiplicatore": "1,992"
        },
        {
            "Prezzo di acquisto": "20,9",
            "Moltiplicatore": "1,991"
        },
        {
            "Prezzo di acquisto": 21,
            "Moltiplicatore": "1,99"
        },
        {
            "Prezzo di acquisto": "21,1",
            "Moltiplicatore": "1,989"
        },
        {
            "Prezzo di acquisto": "21,2",
            "Moltiplicatore": "1,988"
        },
        {
            "Prezzo di acquisto": "21,3",
            "Moltiplicatore": "1,987"
        },
        {
            "Prezzo di acquisto": "21,4",
            "Moltiplicatore": "1,986"
        },
        {
            "Prezzo di acquisto": "21,5",
            "Moltiplicatore": "1,985"
        },
        {
            "Prezzo di acquisto": "21,6",
            "Moltiplicatore": "1,984"
        },
        {
            "Prezzo di acquisto": "21,7",
            "Moltiplicatore": "1,983"
        },
        {
            "Prezzo di acquisto": "21,8",
            "Moltiplicatore": "1,982"
        },
        {
            "Prezzo di acquisto": "21,9",
            "Moltiplicatore": "1,981"
        },
        {
            "Prezzo di acquisto": 22,
            "Moltiplicatore": "1,98"
        },
        {
            "Prezzo di acquisto": "22,1",
            "Moltiplicatore": "1,979"
        },
        {
            "Prezzo di acquisto": "22,2",
            "Moltiplicatore": "1,978"
        },
        {
            "Prezzo di acquisto": "22,3",
            "Moltiplicatore": "1,977"
        },
        {
            "Prezzo di acquisto": "22,4",
            "Moltiplicatore": "1,976"
        },
        {
            "Prezzo di acquisto": "22,5",
            "Moltiplicatore": "1,975"
        },
        {
            "Prezzo di acquisto": "22,6",
            "Moltiplicatore": "1,974"
        },
        {
            "Prezzo di acquisto": "22,7",
            "Moltiplicatore": "1,973"
        },
        {
            "Prezzo di acquisto": "22,8",
            "Moltiplicatore": "1,972"
        },
        {
            "Prezzo di acquisto": "22,9",
            "Moltiplicatore": "1,971"
        },
        {
            "Prezzo di acquisto": 23,
            "Moltiplicatore": "1,97"
        },
        {
            "Prezzo di acquisto": "23,1",
            "Moltiplicatore": "1,969"
        },
        {
            "Prezzo di acquisto": "23,2",
            "Moltiplicatore": "1,968"
        },
        {
            "Prezzo di acquisto": "23,3",
            "Moltiplicatore": "1,967"
        },
        {
            "Prezzo di acquisto": "23,4",
            "Moltiplicatore": "1,966"
        },
        {
            "Prezzo di acquisto": "23,5",
            "Moltiplicatore": "1,965"
        },
        {
            "Prezzo di acquisto": "23,6",
            "Moltiplicatore": "1,964"
        },
        {
            "Prezzo di acquisto": "23,7",
            "Moltiplicatore": "1,963"
        },
        {
            "Prezzo di acquisto": "23,8",
            "Moltiplicatore": "1,962"
        },
        {
            "Prezzo di acquisto": "23,9",
            "Moltiplicatore": "1,961"
        },
        {
            "Prezzo di acquisto": 24,
            "Moltiplicatore": "1,96"
        },
        {
            "Prezzo di acquisto": "24,1",
            "Moltiplicatore": "1,959"
        },
        {
            "Prezzo di acquisto": "24,2",
            "Moltiplicatore": "1,958"
        },
        {
            "Prezzo di acquisto": "24,3",
            "Moltiplicatore": "1,957"
        },
        {
            "Prezzo di acquisto": "24,4",
            "Moltiplicatore": "1,956"
        },
        {
            "Prezzo di acquisto": "24,5",
            "Moltiplicatore": "1,955"
        },
        {
            "Prezzo di acquisto": "24,6",
            "Moltiplicatore": "1,954"
        },
        {
            "Prezzo di acquisto": "24,7",
            "Moltiplicatore": "1,953"
        },
        {
            "Prezzo di acquisto": "24,8",
            "Moltiplicatore": "1,952"
        },
        {
            "Prezzo di acquisto": "24,9",
            "Moltiplicatore": "1,951"
        },
        {
            "Prezzo di acquisto": 25,
            "Moltiplicatore": "1,95"
        },
        {
            "Prezzo di acquisto": "25,1",
            "Moltiplicatore": "1,949"
        },
        {
            "Prezzo di acquisto": "25,2",
            "Moltiplicatore": "1,948"
        },
        {
            "Prezzo di acquisto": "25,3",
            "Moltiplicatore": "1,947"
        },
        {
            "Prezzo di acquisto": "25,4",
            "Moltiplicatore": "1,946"
        },
        {
            "Prezzo di acquisto": "25,5",
            "Moltiplicatore": "1,945"
        },
        {
            "Prezzo di acquisto": "25,6",
            "Moltiplicatore": "1,944"
        },
        {
            "Prezzo di acquisto": "25,7",
            "Moltiplicatore": "1,943"
        },
        {
            "Prezzo di acquisto": "25,8",
            "Moltiplicatore": "1,942"
        },
        {
            "Prezzo di acquisto": "25,9",
            "Moltiplicatore": "1,941"
        },
        {
            "Prezzo di acquisto": 26,
            "Moltiplicatore": "1,94"
        },
        {
            "Prezzo di acquisto": "26,1",
            "Moltiplicatore": "1,939"
        },
        {
            "Prezzo di acquisto": "26,2",
            "Moltiplicatore": "1,938"
        },
        {
            "Prezzo di acquisto": "26,3",
            "Moltiplicatore": "1,937"
        },
        {
            "Prezzo di acquisto": "26,4",
            "Moltiplicatore": "1,936"
        },
        {
            "Prezzo di acquisto": "26,5",
            "Moltiplicatore": "1,935"
        },
        {
            "Prezzo di acquisto": "26,6",
            "Moltiplicatore": "1,934"
        },
        {
            "Prezzo di acquisto": "26,7",
            "Moltiplicatore": "1,933"
        },
        {
            "Prezzo di acquisto": "26,8",
            "Moltiplicatore": "1,932"
        },
        {
            "Prezzo di acquisto": "26,9",
            "Moltiplicatore": "1,931"
        },
        {
            "Prezzo di acquisto": 27,
            "Moltiplicatore": "1,93"
        },
        {
            "Prezzo di acquisto": "27,1",
            "Moltiplicatore": "1,929"
        },
        {
            "Prezzo di acquisto": "27,2",
            "Moltiplicatore": "1,928"
        },
        {
            "Prezzo di acquisto": "27,3",
            "Moltiplicatore": "1,927"
        },
        {
            "Prezzo di acquisto": "27,4",
            "Moltiplicatore": "1,926"
        },
        {
            "Prezzo di acquisto": "27,5",
            "Moltiplicatore": "1,925"
        },
        {
            "Prezzo di acquisto": "27,6",
            "Moltiplicatore": "1,924"
        },
        {
            "Prezzo di acquisto": "27,7",
            "Moltiplicatore": "1,923"
        },
        {
            "Prezzo di acquisto": "27,8",
            "Moltiplicatore": "1,922"
        },
        {
            "Prezzo di acquisto": "27,9",
            "Moltiplicatore": "1,921"
        },
        {
            "Prezzo di acquisto": 28,
            "Moltiplicatore": "1,92"
        },
        {
            "Prezzo di acquisto": "28,1",
            "Moltiplicatore": "1,919"
        },
        {
            "Prezzo di acquisto": "28,2",
            "Moltiplicatore": "1,918"
        },
        {
            "Prezzo di acquisto": "28,3",
            "Moltiplicatore": "1,917"
        },
        {
            "Prezzo di acquisto": "28,4",
            "Moltiplicatore": "1,916"
        },
        {
            "Prezzo di acquisto": "28,5",
            "Moltiplicatore": "1,915"
        },
        {
            "Prezzo di acquisto": "28,6",
            "Moltiplicatore": "1,914"
        },
        {
            "Prezzo di acquisto": "28,7",
            "Moltiplicatore": "1,913"
        },
        {
            "Prezzo di acquisto": "28,8",
            "Moltiplicatore": "1,912"
        },
        {
            "Prezzo di acquisto": "28,9",
            "Moltiplicatore": "1,911"
        },
        {
            "Prezzo di acquisto": 29,
            "Moltiplicatore": "1,91"
        },
        {
            "Prezzo di acquisto": "29,1",
            "Moltiplicatore": "1,909"
        },
        {
            "Prezzo di acquisto": "29,2",
            "Moltiplicatore": "1,908"
        },
        {
            "Prezzo di acquisto": "29,3",
            "Moltiplicatore": "1,907"
        },
        {
            "Prezzo di acquisto": "29,4",
            "Moltiplicatore": "1,906"
        },
        {
            "Prezzo di acquisto": "29,5",
            "Moltiplicatore": "1,905"
        },
        {
            "Prezzo di acquisto": "29,6",
            "Moltiplicatore": "1,904"
        },
        {
            "Prezzo di acquisto": "29,7",
            "Moltiplicatore": "1,903"
        },
        {
            "Prezzo di acquisto": "29,8",
            "Moltiplicatore": "1,902"
        },
        {
            "Prezzo di acquisto": "29,9",
            "Moltiplicatore": "1,901"
        },
        {
            "Prezzo di acquisto": 30,
            "Moltiplicatore": "1,9"
        },
        {
            "Prezzo di acquisto": "30,1",
            "Moltiplicatore": "1,8975"
        },
        {
            "Prezzo di acquisto": "30,2",
            "Moltiplicatore": "1,895"
        },
        {
            "Prezzo di acquisto": "30,3",
            "Moltiplicatore": "1,8925"
        },
        {
            "Prezzo di acquisto": "30,4",
            "Moltiplicatore": "1,89"
        },
        {
            "Prezzo di acquisto": "30,5",
            "Moltiplicatore": "1,8875"
        },
        {
            "Prezzo di acquisto": "30,6",
            "Moltiplicatore": "1,885"
        },
        {
            "Prezzo di acquisto": "30,7",
            "Moltiplicatore": "1,8825"
        },
        {
            "Prezzo di acquisto": "30,8",
            "Moltiplicatore": "1,88"
        },
        {
            "Prezzo di acquisto": "30,9",
            "Moltiplicatore": "1,8775"
        },
        {
            "Prezzo di acquisto": 31,
            "Moltiplicatore": "1,875"
        },
        {
            "Prezzo di acquisto": 32,
            "Moltiplicatore": "1,8725"
        },
        {
            "Prezzo di acquisto": 33,
            "Moltiplicatore": "1,87"
        },
        {
            "Prezzo di acquisto": 34,
            "Moltiplicatore": "1,8675"
        },
        {
            "Prezzo di acquisto": 35,
            "Moltiplicatore": "1,865"
        },
        {
            "Prezzo di acquisto": 36,
            "Moltiplicatore": "1,8625"
        },
        {
            "Prezzo di acquisto": 37,
            "Moltiplicatore": "1,86"
        },
        {
            "Prezzo di acquisto": 38,
            "Moltiplicatore": "1,8575"
        },
        {
            "Prezzo di acquisto": 39,
            "Moltiplicatore": "1,855"
        },
        {
            "Prezzo di acquisto": 40,
            "Moltiplicatore": "1,8525"
        },
        {
            "Prezzo di acquisto": 41,
            "Moltiplicatore": "1,85"
        },
        {
            "Prezzo di acquisto": 42,
            "Moltiplicatore": "1,8475"
        },
        {
            "Prezzo di acquisto": 43,
            "Moltiplicatore": "1,845"
        },
        {
            "Prezzo di acquisto": 44,
            "Moltiplicatore": "1,8425"
        },
        {
            "Prezzo di acquisto": 45,
            "Moltiplicatore": "1,84"
        },
        {
            "Prezzo di acquisto": 46,
            "Moltiplicatore": "1,8375"
        },
        {
            "Prezzo di acquisto": 47,
            "Moltiplicatore": "1,835"
        },
        {
            "Prezzo di acquisto": 48,
            "Moltiplicatore": "1,8325"
        },
        {
            "Prezzo di acquisto": 49,
            "Moltiplicatore": "1,83"
        },
        {
            "Prezzo di acquisto": 50,
            "Moltiplicatore": "1,8275"
        },
        {
            "Prezzo di acquisto": 51,
            "Moltiplicatore": "1,825"
        },
        {
            "Prezzo di acquisto": 52,
            "Moltiplicatore": "1,8225"
        },
        {
            "Prezzo di acquisto": 53,
            "Moltiplicatore": "1,82"
        },
        {
            "Prezzo di acquisto": 54,
            "Moltiplicatore": "1,8175"
        },
        {
            "Prezzo di acquisto": 55,
            "Moltiplicatore": "1,815"
        },
        {
            "Prezzo di acquisto": 56,
            "Moltiplicatore": "1,8125"
        },
        {
            "Prezzo di acquisto": 57,
            "Moltiplicatore": "1,81"
        },
        {
            "Prezzo di acquisto": 58,
            "Moltiplicatore": "1,8075"
        },
        {
            "Prezzo di acquisto": 59,
            "Moltiplicatore": "1,805"
        },
        {
            "Prezzo di acquisto": 60,
            "Moltiplicatore": "1,7975"
        },
        {
            "Prezzo di acquisto": 61,
            "Moltiplicatore": "1,795"
        },
        {
            "Prezzo di acquisto": 62,
            "Moltiplicatore": "1,7925"
        },
        {
            "Prezzo di acquisto": 63,
            "Moltiplicatore": "1,79"
        },
        {
            "Prezzo di acquisto": 64,
            "Moltiplicatore": "1,7875"
        },
        {
            "Prezzo di acquisto": 65,
            "Moltiplicatore": "1,785"
        },
        {
            "Prezzo di acquisto": 66,
            "Moltiplicatore": "1,7825"
        },
        {
            "Prezzo di acquisto": 67,
            "Moltiplicatore": "1,78"
        },
        {
            "Prezzo di acquisto": 68,
            "Moltiplicatore": "1,7775"
        },
        {
            "Prezzo di acquisto": 69,
            "Moltiplicatore": "1,775"
        },
        {
            "Prezzo di acquisto": 70,
            "Moltiplicatore": "1,7725"
        },
        {
            "Prezzo di acquisto": 71,
            "Moltiplicatore": "1,77"
        },
        {
            "Prezzo di acquisto": 72,
            "Moltiplicatore": "1,7675"
        },
        {
            "Prezzo di acquisto": 73,
            "Moltiplicatore": "1,765"
        },
        {
            "Prezzo di acquisto": 74,
            "Moltiplicatore": "1,7625"
        },
        {
            "Prezzo di acquisto": 75,
            "Moltiplicatore": "1,76"
        },
        {
            "Prezzo di acquisto": 76,
            "Moltiplicatore": "1,7575"
        },
        {
            "Prezzo di acquisto": 77,
            "Moltiplicatore": "1,755"
        },
        {
            "Prezzo di acquisto": 78,
            "Moltiplicatore": "1,7525"
        },
        {
            "Prezzo di acquisto": 79,
            "Moltiplicatore": "1,75"
        },
        {
            "Prezzo di acquisto": 80,
            "Moltiplicatore": "1,7475"
        },
        {
            "Prezzo di acquisto": 81,
            "Moltiplicatore": "1,745"
        },
        {
            "Prezzo di acquisto": 82,
            "Moltiplicatore": "1,7425"
        },
        {
            "Prezzo di acquisto": 83,
            "Moltiplicatore": "1,74"
        },
        {
            "Prezzo di acquisto": 84,
            "Moltiplicatore": "1,7375"
        },
        {
            "Prezzo di acquisto": 85,
            "Moltiplicatore": "1,735"
        },
        {
            "Prezzo di acquisto": 86,
            "Moltiplicatore": "1,7325"
        },
        {
            "Prezzo di acquisto": 87,
            "Moltiplicatore": "1,73"
        },
        {
            "Prezzo di acquisto": 88,
            "Moltiplicatore": "1,7275"
        },
        {
            "Prezzo di acquisto": 89,
            "Moltiplicatore": "1,725"
        },
        {
            "Prezzo di acquisto": 90,
            "Moltiplicatore": "1,7225"
        },
        {
            "Prezzo di acquisto": 91,
            "Moltiplicatore": "1,72"
        },
        {
            "Prezzo di acquisto": 92,
            "Moltiplicatore": "1,7175"
        },
        {
            "Prezzo di acquisto": 93,
            "Moltiplicatore": "1,715"
        },
        {
            "Prezzo di acquisto": 94,
            "Moltiplicatore": "1,7125"
        },
        {
            "Prezzo di acquisto": 95,
            "Moltiplicatore": "1,71"
        },
        {
            "Prezzo di acquisto": 96,
            "Moltiplicatore": "1,7075"
        },
        {
            "Prezzo di acquisto": 97,
            "Moltiplicatore": "1,705"
        },
        {
            "Prezzo di acquisto": 98,
            "Moltiplicatore": "1,7025"
        },
        {
            "Prezzo di acquisto": 99,
            "Moltiplicatore": "1,7"
        },
        {
            "Prezzo di acquisto": 100,
            "Moltiplicatore": "1,6999"
        },
        {
            "Prezzo di acquisto": 101,
            "Moltiplicatore": "1,6995"
        },
        {
            "Prezzo di acquisto": 102,
            "Moltiplicatore": "1,6991"
        },
        {
            "Prezzo di acquisto": 103,
            "Moltiplicatore": "1,6987"
        },
        {
            "Prezzo di acquisto": 104,
            "Moltiplicatore": "1,6983"
        },
        {
            "Prezzo di acquisto": 105,
            "Moltiplicatore": "1,6979"
        },
        {
            "Prezzo di acquisto": 106,
            "Moltiplicatore": "1,6975"
        },
        {
            "Prezzo di acquisto": 107,
            "Moltiplicatore": "1,6971"
        },
        {
            "Prezzo di acquisto": 108,
            "Moltiplicatore": "1,6967"
        },
        {
            "Prezzo di acquisto": 109,
            "Moltiplicatore": "1,6963"
        },
        {
            "Prezzo di acquisto": 110,
            "Moltiplicatore": "1,6959"
        },
        {
            "Prezzo di acquisto": 111,
            "Moltiplicatore": "1,6955"
        },
        {
            "Prezzo di acquisto": 112,
            "Moltiplicatore": "1,6951"
        },
        {
            "Prezzo di acquisto": 113,
            "Moltiplicatore": "1,6947"
        },
        {
            "Prezzo di acquisto": 114,
            "Moltiplicatore": "1,6943"
        },
        {
            "Prezzo di acquisto": 115,
            "Moltiplicatore": "1,6939"
        },
        {
            "Prezzo di acquisto": 116,
            "Moltiplicatore": "1,6935"
        },
        {
            "Prezzo di acquisto": 117,
            "Moltiplicatore": "1,6931"
        },
        {
            "Prezzo di acquisto": 118,
            "Moltiplicatore": "1,6927"
        },
        {
            "Prezzo di acquisto": 119,
            "Moltiplicatore": "1,6923"
        },
        {
            "Prezzo di acquisto": 120,
            "Moltiplicatore": "1,6919"
        },
        {
            "Prezzo di acquisto": 121,
            "Moltiplicatore": "1,6915"
        },
        {
            "Prezzo di acquisto": 122,
            "Moltiplicatore": "1,6911"
        },
        {
            "Prezzo di acquisto": 123,
            "Moltiplicatore": "1,6907"
        },
        {
            "Prezzo di acquisto": 124,
            "Moltiplicatore": "1,6903"
        },
        {
            "Prezzo di acquisto": 125,
            "Moltiplicatore": "1,6899"
        },
        {
            "Prezzo di acquisto": 126,
            "Moltiplicatore": "1,6895"
        },
        {
            "Prezzo di acquisto": 127,
            "Moltiplicatore": "1,6891"
        },
        {
            "Prezzo di acquisto": 128,
            "Moltiplicatore": "1,6887"
        },
        {
            "Prezzo di acquisto": 129,
            "Moltiplicatore": "1,6883"
        },
        {
            "Prezzo di acquisto": 130,
            "Moltiplicatore": "1,6879"
        },
        {
            "Prezzo di acquisto": 131,
            "Moltiplicatore": "1,6875"
        },
        {
            "Prezzo di acquisto": 132,
            "Moltiplicatore": "1,6871"
        },
        {
            "Prezzo di acquisto": 133,
            "Moltiplicatore": "1,6867"
        },
        {
            "Prezzo di acquisto": 134,
            "Moltiplicatore": "1,6863"
        },
        {
            "Prezzo di acquisto": 135,
            "Moltiplicatore": "1,6859"
        },
        {
            "Prezzo di acquisto": 136,
            "Moltiplicatore": "1,6855"
        },
        {
            "Prezzo di acquisto": 137,
            "Moltiplicatore": "1,6851"
        },
        {
            "Prezzo di acquisto": 138,
            "Moltiplicatore": "1,6847"
        },
        {
            "Prezzo di acquisto": 139,
            "Moltiplicatore": "1,6843"
        },
        {
            "Prezzo di acquisto": 140,
            "Moltiplicatore": "1,6839"
        },
        {
            "Prezzo di acquisto": 141,
            "Moltiplicatore": "1,6835"
        },
        {
            "Prezzo di acquisto": 142,
            "Moltiplicatore": "1,6831"
        },
        {
            "Prezzo di acquisto": 143,
            "Moltiplicatore": "1,6827"
        },
        {
            "Prezzo di acquisto": 144,
            "Moltiplicatore": "1,6823"
        },
        {
            "Prezzo di acquisto": 145,
            "Moltiplicatore": "1,6819"
        },
        {
            "Prezzo di acquisto": 146,
            "Moltiplicatore": "1,6815"
        },
        {
            "Prezzo di acquisto": 147,
            "Moltiplicatore": "1,6811"
        },
        {
            "Prezzo di acquisto": 148,
            "Moltiplicatore": "1,6807"
        },
        {
            "Prezzo di acquisto": 149,
            "Moltiplicatore": "1,6803"
        },
        {
            "Prezzo di acquisto": 150,
            "Moltiplicatore": "1,6799"
        },
        {
            "Prezzo di acquisto": 151,
            "Moltiplicatore": "1,6795"
        },
        {
            "Prezzo di acquisto": 152,
            "Moltiplicatore": "1,6791"
        },
        {
            "Prezzo di acquisto": 153,
            "Moltiplicatore": "1,6787"
        },
        {
            "Prezzo di acquisto": 154,
            "Moltiplicatore": "1,6783"
        },
        {
            "Prezzo di acquisto": 155,
            "Moltiplicatore": "1,6779"
        },
        {
            "Prezzo di acquisto": 156,
            "Moltiplicatore": "1,6775"
        },
        {
            "Prezzo di acquisto": 157,
            "Moltiplicatore": "1,6771"
        },
        {
            "Prezzo di acquisto": 158,
            "Moltiplicatore": "1,6767"
        },
        {
            "Prezzo di acquisto": 159,
            "Moltiplicatore": "1,6763"
        },
        {
            "Prezzo di acquisto": 160,
            "Moltiplicatore": "1,6759"
        },
        {
            "Prezzo di acquisto": 161,
            "Moltiplicatore": "1,6755"
        },
        {
            "Prezzo di acquisto": 162,
            "Moltiplicatore": "1,6751"
        },
        {
            "Prezzo di acquisto": 163,
            "Moltiplicatore": "1,6747"
        },
        {
            "Prezzo di acquisto": 164,
            "Moltiplicatore": "1,6743"
        },
        {
            "Prezzo di acquisto": 165,
            "Moltiplicatore": "1,6739"
        },
        {
            "Prezzo di acquisto": 166,
            "Moltiplicatore": "1,6735"
        },
        {
            "Prezzo di acquisto": 167,
            "Moltiplicatore": "1,6731"
        },
        {
            "Prezzo di acquisto": 168,
            "Moltiplicatore": "1,6727"
        },
        {
            "Prezzo di acquisto": 169,
            "Moltiplicatore": "1,6723"
        },
        {
            "Prezzo di acquisto": 170,
            "Moltiplicatore": "1,6719"
        },
        {
            "Prezzo di acquisto": 171,
            "Moltiplicatore": "1,6715"
        },
        {
            "Prezzo di acquisto": 172,
            "Moltiplicatore": "1,6711"
        },
        {
            "Prezzo di acquisto": 173,
            "Moltiplicatore": "1,6707"
        },
        {
            "Prezzo di acquisto": 174,
            "Moltiplicatore": "1,6703"
        },
        {
            "Prezzo di acquisto": 175,
            "Moltiplicatore": "1,6699"
        },
        {
            "Prezzo di acquisto": 176,
            "Moltiplicatore": "1,6695"
        },
        {
            "Prezzo di acquisto": 177,
            "Moltiplicatore": "1,6691"
        },
        {
            "Prezzo di acquisto": 178,
            "Moltiplicatore": "1,6687"
        },
        {
            "Prezzo di acquisto": 179,
            "Moltiplicatore": "1,6683"
        },
        {
            "Prezzo di acquisto": 180,
            "Moltiplicatore": "1,6679"
        },
        {
            "Prezzo di acquisto": 181,
            "Moltiplicatore": "1,6675"
        },
        {
            "Prezzo di acquisto": 182,
            "Moltiplicatore": "1,6671"
        },
        {
            "Prezzo di acquisto": 183,
            "Moltiplicatore": "1,6667"
        },
        {
            "Prezzo di acquisto": 184,
            "Moltiplicatore": "1,6663"
        },
        {
            "Prezzo di acquisto": 185,
            "Moltiplicatore": "1,6659"
        },
        {
            "Prezzo di acquisto": 186,
            "Moltiplicatore": "1,6655"
        },
        {
            "Prezzo di acquisto": 187,
            "Moltiplicatore": "1,6651"
        },
        {
            "Prezzo di acquisto": 188,
            "Moltiplicatore": "1,6647"
        },
        {
            "Prezzo di acquisto": 189,
            "Moltiplicatore": "1,6643"
        },
        {
            "Prezzo di acquisto": 190,
            "Moltiplicatore": "1,6639"
        },
        {
            "Prezzo di acquisto": 191,
            "Moltiplicatore": "1,6635"
        },
        {
            "Prezzo di acquisto": 192,
            "Moltiplicatore": "1,6631"
        },
        {
            "Prezzo di acquisto": 193,
            "Moltiplicatore": "1,6627"
        },
        {
            "Prezzo di acquisto": 194,
            "Moltiplicatore": "1,6623"
        },
        {
            "Prezzo di acquisto": 195,
            "Moltiplicatore": "1,6619"
        },
        {
            "Prezzo di acquisto": 196,
            "Moltiplicatore": "1,6615"
        },
        {
            "Prezzo di acquisto": 197,
            "Moltiplicatore": "1,6611"
        },
        {
            "Prezzo di acquisto": 198,
            "Moltiplicatore": "1,6607"
        },
        {
            "Prezzo di acquisto": 199,
            "Moltiplicatore": "1,6603"
        },
        {
            "Prezzo di acquisto": 200,
            "Moltiplicatore": "1,6599"
        },
        {
            "Prezzo di acquisto": 201,
            "Moltiplicatore": "1,6595"
        },
        {
            "Prezzo di acquisto": 202,
            "Moltiplicatore": "1,6591"
        },
        {
            "Prezzo di acquisto": 203,
            "Moltiplicatore": "1,6587"
        },
        {
            "Prezzo di acquisto": 204,
            "Moltiplicatore": "1,6583"
        },
        {
            "Prezzo di acquisto": 205,
            "Moltiplicatore": "1,6579"
        },
        {
            "Prezzo di acquisto": 206,
            "Moltiplicatore": "1,6575"
        },
        {
            "Prezzo di acquisto": 207,
            "Moltiplicatore": "1,6571"
        },
        {
            "Prezzo di acquisto": 208,
            "Moltiplicatore": "1,6567"
        },
        {
            "Prezzo di acquisto": 209,
            "Moltiplicatore": "1,6563"
        },
        {
            "Prezzo di acquisto": 210,
            "Moltiplicatore": "1,6559"
        },
        {
            "Prezzo di acquisto": 211,
            "Moltiplicatore": "1,6555"
        },
        {
            "Prezzo di acquisto": 212,
            "Moltiplicatore": "1,6551"
        },
        {
            "Prezzo di acquisto": 213,
            "Moltiplicatore": "1,6547"
        },
        {
            "Prezzo di acquisto": 214,
            "Moltiplicatore": "1,6543"
        },
        {
            "Prezzo di acquisto": 215,
            "Moltiplicatore": "1,6539"
        },
        {
            "Prezzo di acquisto": 216,
            "Moltiplicatore": "1,6535"
        },
        {
            "Prezzo di acquisto": 217,
            "Moltiplicatore": "1,6531"
        },
        {
            "Prezzo di acquisto": 218,
            "Moltiplicatore": "1,6527"
        },
        {
            "Prezzo di acquisto": 219,
            "Moltiplicatore": "1,6523"
        },
        {
            "Prezzo di acquisto": 220,
            "Moltiplicatore": "1,6519"
        },
        {
            "Prezzo di acquisto": 221,
            "Moltiplicatore": "1,6515"
        },
        {
            "Prezzo di acquisto": 222,
            "Moltiplicatore": "1,6511"
        },
        {
            "Prezzo di acquisto": 223,
            "Moltiplicatore": "1,6507"
        },
        {
            "Prezzo di acquisto": 224,
            "Moltiplicatore": "1,6503"
        },
        {
            "Prezzo di acquisto": 225,
            "Moltiplicatore": "1,6499"
        },
        {
            "Prezzo di acquisto": 226,
            "Moltiplicatore": "1,6495"
        },
        {
            "Prezzo di acquisto": 227,
            "Moltiplicatore": "1,6491"
        },
        {
            "Prezzo di acquisto": 228,
            "Moltiplicatore": "1,6487"
        },
        {
            "Prezzo di acquisto": 229,
            "Moltiplicatore": "1,6483"
        },
        {
            "Prezzo di acquisto": 230,
            "Moltiplicatore": "1,6479"
        },
        {
            "Prezzo di acquisto": 231,
            "Moltiplicatore": "1,6475"
        },
        {
            "Prezzo di acquisto": 232,
            "Moltiplicatore": "1,6471"
        },
        {
            "Prezzo di acquisto": 233,
            "Moltiplicatore": "1,6467"
        },
        {
            "Prezzo di acquisto": 234,
            "Moltiplicatore": "1,6463"
        },
        {
            "Prezzo di acquisto": 235,
            "Moltiplicatore": "1,6459"
        },
        {
            "Prezzo di acquisto": 236,
            "Moltiplicatore": "1,6455"
        },
        {
            "Prezzo di acquisto": 237,
            "Moltiplicatore": "1,6451"
        },
        {
            "Prezzo di acquisto": 238,
            "Moltiplicatore": "1,6447"
        },
        {
            "Prezzo di acquisto": 239,
            "Moltiplicatore": "1,6443"
        },
        {
            "Prezzo di acquisto": 240,
            "Moltiplicatore": "1,6439"
        },
        {
            "Prezzo di acquisto": 241,
            "Moltiplicatore": "1,6435"
        },
        {
            "Prezzo di acquisto": 242,
            "Moltiplicatore": "1,6431"
        },
        {
            "Prezzo di acquisto": 243,
            "Moltiplicatore": "1,6427"
        },
        {
            "Prezzo di acquisto": 244,
            "Moltiplicatore": "1,6423"
        },
        {
            "Prezzo di acquisto": 245,
            "Moltiplicatore": "1,6419"
        },
        {
            "Prezzo di acquisto": 246,
            "Moltiplicatore": "1,6415"
        },
        {
            "Prezzo di acquisto": 247,
            "Moltiplicatore": "1,6411"
        },
        {
            "Prezzo di acquisto": 248,
            "Moltiplicatore": "1,6407"
        },
        {
            "Prezzo di acquisto": 249,
            "Moltiplicatore": "1,6403"
        },
        {
            "Prezzo di acquisto": 250,
            "Moltiplicatore": "1,6399"
        },
        {
            "Prezzo di acquisto": 251,
            "Moltiplicatore": "1,6395"
        },
        {
            "Prezzo di acquisto": 252,
            "Moltiplicatore": "1,6391"
        },
        {
            "Prezzo di acquisto": 253,
            "Moltiplicatore": "1,6387"
        },
        {
            "Prezzo di acquisto": 254,
            "Moltiplicatore": "1,6383"
        },
        {
            "Prezzo di acquisto": 255,
            "Moltiplicatore": "1,6379"
        },
        {
            "Prezzo di acquisto": 256,
            "Moltiplicatore": "1,6375"
        },
        {
            "Prezzo di acquisto": 257,
            "Moltiplicatore": "1,6371"
        },
        {
            "Prezzo di acquisto": 258,
            "Moltiplicatore": "1,6367"
        },
        {
            "Prezzo di acquisto": 259,
            "Moltiplicatore": "1,6363"
        },
        {
            "Prezzo di acquisto": 260,
            "Moltiplicatore": "1,6359"
        },
        {
            "Prezzo di acquisto": 261,
            "Moltiplicatore": "1,6355"
        },
        {
            "Prezzo di acquisto": 262,
            "Moltiplicatore": "1,6351"
        },
        {
            "Prezzo di acquisto": 263,
            "Moltiplicatore": "1,6347"
        },
        {
            "Prezzo di acquisto": 264,
            "Moltiplicatore": "1,6343"
        },
        {
            "Prezzo di acquisto": 265,
            "Moltiplicatore": "1,6339"
        },
        {
            "Prezzo di acquisto": 266,
            "Moltiplicatore": "1,6335"
        },
        {
            "Prezzo di acquisto": 267,
            "Moltiplicatore": "1,6331"
        },
        {
            "Prezzo di acquisto": 268,
            "Moltiplicatore": "1,6327"
        },
        {
            "Prezzo di acquisto": 269,
            "Moltiplicatore": "1,6323"
        },
        {
            "Prezzo di acquisto": 270,
            "Moltiplicatore": "1,6319"
        },
        {
            "Prezzo di acquisto": 271,
            "Moltiplicatore": "1,6315"
        },
        {
            "Prezzo di acquisto": 272,
            "Moltiplicatore": "1,6311"
        },
        {
            "Prezzo di acquisto": 273,
            "Moltiplicatore": "1,6307"
        },
        {
            "Prezzo di acquisto": 274,
            "Moltiplicatore": "1,6303"
        },
        {
            "Prezzo di acquisto": 275,
            "Moltiplicatore": "1,6299"
        },
        {
            "Prezzo di acquisto": 276,
            "Moltiplicatore": "1,6295"
        },
        {
            "Prezzo di acquisto": 277,
            "Moltiplicatore": "1,6291"
        },
        {
            "Prezzo di acquisto": 278,
            "Moltiplicatore": "1,6287"
        },
        {
            "Prezzo di acquisto": 279,
            "Moltiplicatore": "1,6283"
        },
        {
            "Prezzo di acquisto": 280,
            "Moltiplicatore": "1,6279"
        }];
    return {
        getMultiplier: function($price) {
            return table.
        } 
    }
}) */

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

service.factory('Catalog', function($http) {
    return {
        //return wines from a specific winelist - by winelist_id
        getCatalog: function() {
            var promise = $http.get('https://tws-middleware-staging.herokuapp.com/wines/').then(function (results) {
                return results.data["0"].data;
            });
            return promise;
        }
    };
})

service.factory('Wharehouse', function($http) {
    return {
        //return wines from a specific winelist - by winelist_id
        postWharehouseExhaust: function(navision_id, wine_id, quantity, wine_year, location_id, winemaker_name, wine_name, region, tipology) {
            alert(region);
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
                "WineMaker_Name": winemaker_name,
                "Regione": region,
                "Subcategory": tipology
            })).then(function (results) {
                return results;
            });
            return promise;
        },
        getWharehouseExhaust: function(customer_id) {
            var promise = $http.get('https://tws-middleware-staging.herokuapp.com/exhaustByCustomerId/' + customer_id).then(function (results) {
                return results.data["0"].data.value;
            });
            return promise;
        },
        exhaustRectification: function(exhaust_id, download_date, customer_id, location_id, wine_id, wine_year, wine_name, winemaker_name, quantity, etag) {
            var promise = $http.patch("https://tws-middleware-staging.herokuapp.com/exhaust/" + exhaust_id + "/" + download_date + "/" + customer_id + "/" + location_id + "/" + wine_id + "/" + wine_year, JSON.stringify({
                "Quantity": quantity,
                "WineMaker_Name": winemaker_name,
                "Description": wine_name,
                "ETag": etag
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
                console.log("NAVISION ID " + navision_id);
                return results.data["0"].data["0"].No;
            });
            return promise;
        }

    };
})

/** 
    var LoginController = function($scope, $http, App) {
        var webAuth = new auth0.WebAuth({
            domain: "thewinesider.eu.auth0.com",
            clientID: "0bFEhpOfFECLOhlNlabrsv0RTC4aZH3g",
            responseType: "token",
        });
        $scope.login = function(user) {
            webAuth.client.login({
                realm: "thewinesider",
                username: user.id,
                password: user.password,
                scope: "openid email profile"
            }, function(err, authResult) {
                if(err) {
                    return console.warn(err);
                }
                webAuth.client.userInfo(authResult.accessToken, function(err, userInfo) {
                    if(err) {
                        return console.warn(err);
                    }
                    var auth0Manage = new auth0.Management({
                        domain: "thewinesider.eu.auth0.com",
                        token: authResult.idToken
                    });
                    auth0Manage.getUser(window.encodeURIComponent(userInfo.sub), function(err, userInfo) {
                        if(err) {
                            return console.warn(err);
                        }
                        // Now you have all the user's information
                        App.user = angular.extend({}, user, authResult, userInfo);
                    });
                });
            });
        };
    };

**/

service.factory('Auth', function($rootScope) {

    var Auth0Cordova = require('@auth0/cordova');
    var auth0 = require('auth0-js');
    var userProfile = {};

    var auth0Config = {
        clientId: 'wSyqm1HK0kOJ2APXyS6CJjLkI4Er2oCq',
        domain: 'thewinesider.eu.auth0.com',
        callbackURL: location.href,
        packageIdentifier: 'io.ionic.starter'
    };

    auth0Config.clientID = auth0Config.clientId;

    var webAuth = new auth0.WebAuth(auth0Config);

    function setSession(authResult) {
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        window.localStorage.setItem('access_token', authResult.accessToken);
        window.localStorage.setItem('id_token', authResult.idToken);
        window.localStorage.setItem('expires_at', expiresAt);
    }

    function isAuthenticated() {
        var expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
        return Date.now() < expiresAt;
    }

    function getProfile(cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }

        webAuth.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                userProfile = profile;
            }
            cb(err, profile);
        });
    }

    function login() {
        var client = new Auth0Cordova(auth0Config);

        var options = {
            username: 'demo@thewinesider.com',
            password: 'demotws',
            scope: 'openid profile offline_access'
        };

        client.authorize(options, function(err, authResult) {
            if (err) {
                throw new Error(err);
            }
            if (authResult && authResult.accessToken && authResult.idToken) {
                setSession(authResult);
                $rootScope.$apply();
            }
        });
    }

    function logout() {
        window.localStorage.removeItem('profile');
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('id_token');
        window.localStorage.removeItem('expires_at');
    }

    return {
        login: login,
        logout: logout,
        getProfile: getProfile,
        isAuthenticated: isAuthenticated
    };
});


