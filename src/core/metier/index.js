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

const Metier = require("app/core/bdd");


/**
 * Fonction correspondtant au POST qui modifie une commande et passe son status en confirmed
 * @param {Number} _id ID de la commande � confirmer
 * @param {any} callback Callback renvoyant le r�sultat de la fonction confirMetier
 */
function confirmMetier(_id, callback) {
  Metier.OrderModel.findById({ _id }, (err, Up) => {
    if (err) {
      callback(`Probleme lors du passage de la requ�te Update :${err}`);
    } else {
      Up.Status = "confirmed";
      Up.save();

      const data = `Order confirmed for ${_id}`;
      callback(data);
    }
  });
}

/**
 * Fonction correspondant au GET calculant le total de b�n�fices � chaque mois
 * @param {any} callback Callback renvoyant le r�sultat de la fonction turnoverMonth
 */
function turnoverMonth(callback) {
  Metier.OrderModel.aggregate(
    [{ $match: { Status: "confirmed" } },
      {
        $group: {
          _id: { month: { $month: "$date" }, somme: { $sum: "$total" } },
        },
      },

    ],
    (err, data) => {
      if (err) {
        callback(`Probleme lors du classement :${err}`);
      } else {
        callback(data);
      }
    },
  );
}

/**
 * Fonction correspondant au GET renvoyant le produit le mieux vendus
 * @param {any} callback Callback renvoyant le r�sultat de la fonction bestProduct
 */
function bestProduct(callback) {
  Metier.OrderModel.aggregate(
    [
      { $group: { _id: "$code", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 },
    ],
    (err, data) => {
      if (err) {
        callback(`Probleme lors du calcule :${err}`);
      } else {
        callback(data);
      }
    },
  );
}

/** Export des fonctions confirmMetier, turnoverMonth, bestProduct */
export { confirmMetier, turnoverMonth, bestProduct };
