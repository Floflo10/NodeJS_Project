const Metier = require('app/core/bdd');


function confirmMetier(_id, callback) {

    Metier.OrderModel.findById({ _id }, function (err, Up) {
        if (err) {
            callback('Probleme lors du passage de la requête Update :' + err);
        } else {
            Up.statut = " confirmed";
            Up.save();

            var data = 'Order confirmed for ' + _id;
            callback(data);
        }

    });


}


function turnoverMonth(callback) {

    Metier.OrderModel.aggregate(
        [{ $match: { statut: "confirmed" } },
            {
                $group: {
                    Result: { month: { $month: "$date" }, somme: { $sum: "$total" } },
                }
            }

        ],
        function (err, data) {
        if (err) {
            callback('Probleme lors du classement :' + err);
        } else {
            callback(data);
        }

    });


}


function bestProduct(callback) {

    Metier.OrderModel.aggregate(
        { $group: { "Product": "$product", "Number": { $sum: 1 } } },
        { $sort: { "count": -1 } },
        { $limit: 1 },
        function (err, data) {
            if (err) {
                callback('Probleme lors du calcule :' + err);
            } else {
                callback(data);
            }

        });


}



export { confirmMetier, turnoverMonth, bestProduct };