/**
 * Module Metier
 * @fileOverview Module contenant les fonctions CRUD pour Metier
 * @author Florian Martines
 *
 * @requires app/core/bdd
 *
 *
 * @module metier
 * @see app/core/metier
 */

const Metier = require('app/core/bdd');


/**
 * Fonction correspondtant au POST qui modifie une commande et passe son status en confirmed
 * @param {Number} _id ID de la commande à confirmer
 * @param {any} callback Callback renvoyant le résultat de la fonction confirMetier
 */
function confirmMetier(_id, callback) {

    Metier.OrderModel.findById({ _id }, function (err, Up) {
        if (err) {
            callback('Probleme lors du passage de la requête Update :' + err);
        } else {
            Up.Status = "confirmed";
            Up.save();

            var data = 'Order confirmed for ' + _id;
            callback(data);
        }

    });


}

/**
 * Fonction correspondant au GET calculant le total de bénéfices à chaque mois
 * @param {any} callback Callback renvoyant le résultat de la fonction turnoverMonth
 */
function turnoverMonth(callback) {

    Metier.OrderModel.aggregate(
        [{ $match: { Status: "confirmed" } },
        {
            $group: {
                _id: { month: { $month: "$date" }, somme: { $sum: "$total" } },
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

/**
 * Fonction correspondant au GET renvoyant le produit le mieux vendus
 * @param {any} callback Callback renvoyant le résultat de la fonction bestProduct
 */
function bestProduct(callback) {

    Metier.OrderModel.aggregate([
        { $group: { "_id": "$code", "count": { $sum: 1 } } },
        { $sort: { "count": -1 } },
        { $limit: 1 }
    ],
        function (err, data) {
            if (err) {
                callback('Probleme lors du calcule :' + err);
            } else {
                callback(data);
            }

        });

}

/** Export des fonctions confirmMetier, turnoverMonth, bestProduct */
export { confirmMetier, turnoverMonth, bestProduct };