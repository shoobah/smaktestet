module.exports = function(app) {

    var mockData = [{
        "id": 1,
        "comments": "Alla tyckte vanlig Cola känders blaskig.",
        "date": "2014-09-24",
        "flavors": [
            "Coca Cola Zero",
            "Pepsi Max",
            "Coca Cola",
            "Coca Cola Life",
            "Coca Cola Cherry",
            "Coca Cola Vanilla",
            "Coca Cola Light"
        ],
        "name": "Cola",
        "points": [{
            "hits": [
                "Pepsi Max",
                "Coca Cola Cherry",
                "Coca Cola Vanilla",
                "Coca Cola Light"
            ],
            "participant": "Anders"
        }, {
            "participant": "Anna",
            "hits": []
        }, {
            "participant": "Nils",
            "hits": [
                "Coca Cola Zero",
                "Coca Cola Cherry",
                "Coca Cola Vanilla"
            ]
        }]
    }, {
        "id": 2,
        "comments": "X-tra är inte bra alltså!",
        "date": "2014-09-30",
        "flavors": [
            "Marabou Mjölkchoklad",
            "Marabou Schweizernöt",
            "Plopp",
            "Center",
            "Fazer Hasselnöt",
            "Fazer Mjölkchoklad",
            "X-tra mjölkchoklad"
        ],
        "name": "Mjölkchoklad",
        "points": [{
            "hits": [
                "Marabou Schweizernöt",
                "Plopp",
                "Center",
                "Fazer Hasselnöt",
                "X-tra mjölkchoklad"
            ],
            "participant": "Anders"
        }, {
            "hits": [
                "Marabou Mjölkchoklad",
                "Marabou Schweizernöt",
                "Plopp",
                "Center",
                "Fazer Hasselnöt",
                "Fazer Mjölkchoklad",
                "X-tra mjölkchoklad"
            ],
            "participant": "Anna"
        }, {
            "hits": [
                "Marabou Mjölkchoklad",
                "Plopp",
                "Center",
                "Fazer Mjölkchoklad",
                "X-tra mjölkchoklad"
            ],
            "participant": "Nils"
        }]
    }, {
        "id": 3,
        "comments": "Svårt. Moji Tea var riktigt äcklig, smakar Wonderbaum",
        "date": "2014-10-08",
        "flavors": [
            "Ramlösa Rött Päron",
            "Ramlösa Mango",
            "Loka Vattenmelon-Citron",
            "Loka Jordgubb-Ananas",
            "Loka Mango-Päron"
            "Loka Citron",
            "Loka Moji Tea"
        ],
        "name": "Bordsvatten",
        "points": [{
            "hits": [
                "Ramlösa Rött Päron",
                "Loka Jordgubb-Ananas",
                "Loka Citron",
                "Loka Moji Tea"
            ],
            "participant": "Anders"
        }, {
            "hits": [
                "Loka Jordgubb-Ananas",
                "Loka Citron",
                "Loka Moji Tea"
            ],
            "participant": "Anna"
        }, {
            "hits": [
                "Loka Citron",
                "Loka Moji Tea"
            ],
            "participant": "Nils"
        }]
    }, {
        "id": 4,
        "comments": "Vi hade 6 sorters pepparkakor, för att fylla ut till 7 lade vi till en av de andra sorterna som joker.",
        "date": "2014-11-11",
        "flavors": [
            "Ballerina pepparkaka",
            "Annas pepparkakor",
            "ICA Kryddig pepparkaka",
            "Kung Oscar",
            "Gille pepparkakor"
        ],
        "name": "Pepparkakor",
        "points": [{
            "hits": [
                "Ballerina pepparkaka",
                "Annas pepparkakor",
                "Gille pepparkakor"
            ],
            "participant": "Anders"
        }, {
            "hits": ["Ballerina pepparkaka"],
            "participant": "Anna"
        }, {
            "hits": [
                "Ballerina pepparkaka",
                "Kung Oscar"
            ],
            "participant": "Nils"
        }]
    }, {
        "id": 5,
        "comments": "Jokern denna gång var Wienerbröd, ingen tog fel på det :)",
        "date": "2014-10-28",
        "flavors": [
            "Wienerbröd",
            "Skogaholms godingar, kanel",
            "Pågens gifflar, kanel",
            "Pågens gifflar, saffran",
            "Pågens gifflar, blåbär",
            "Pågens gifflar, pepparkaka",
            "Kardemummabullar",
        ],
        "name": "Bullar",
        "points": [{
            "hits": [
                "Wienerbröd",
                "Pågens gifflar, saffran",
                "Pågens gifflar, blåbär",
            ],
            "participant": "Anders"
        }, {
            "hits": [
                "Wienerbröd",
                "Pågens gifflar, saffran",
                "Pågens gifflar, blåbär",
                "Pågens gifflar, pepparkaka",
                "Kardemummabullar",
            ],
            "participant": "Anna"
        }, {
            "hits": [
                "Wienerbröd",
                "Pågens gifflar, saffran",
                "Pågens gifflar, blåbär",
                "Pågens gifflar, pepparkaka",
            ],
            "participant": "Nils"
        }]
    }];

    var express = require('express');
    var challengeDataRouter = express.Router();
    challengeDataRouter.get('/', function(req, res) {
        res.send(mockData);
    });
    app.use('/api/challengeData', challengeDataRouter);
};
