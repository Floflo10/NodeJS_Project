/**
 * Module Line
 * @fileOverview Module contenant les fonctions CRUD pour Line
 * @author Florian Martines
 *
 * @requires app/core/bdd
 *
 *
 * @module line
 * @see app/core/line
 */

const Line = require("app/core/bdd");

/**
 * Fonction ajoutant une nouvelle ligne de commande
 * @param {Number} productAdd Lien vers le Produit
 * @param {Number} orderAdd Lien vers la commande
 * @param {Number} quantityAdd Quantité de produits ajouté à la commande
 * @param {any} callback Callback renvoyant le résultat de la fonction addLine
 */
function addLine(productAdd, orderAdd, quantityAdd, callback) {
  Line.OrderlineModel.create({ product: productAdd, order: orderAdd, quantity: quantityAdd }, (err, product, order, quantity) => {
    if (err) {
      callback(`Probleme lors du passage de la requ�te Add :${err}`);
    } else {
      const data = `Product: ${productAdd} | Order: ${orderAdd} | Quantity: ${quantityAdd}`;
      callback(data);
    }
  });
}

/**
 * Fonction correspodant au DELETE supprimant une ligne de commande
 * @param {Number} idprod ID de la ligne de commande à supprimer
 * @param {any} callback Callback renvoyant le résultat de la fonction deleteLine
 */
function deleteLine(idLine, callback) {
  Line.OrderlineModel.remove({ _id: idLine }, (err) => {
    if (err) {
      callback(`Probleme lors du passage de la requ�te Delete :${err}`);
    } else {
      const data = `Suppression de${idLine}effectu�e`;
      callback(data);
    }
  });
}

/**
 * Fonction correspodant au POST supprimant une ligne de commande
 * @param {Number} _id ID de la ligne de commande à modifier
 * @param {Number} productUp Numeros du produit à modifier
 * @param {Number} orderUp Numeros de la commande à modifier
 * @param {Number} quantityUp Quantité de produit à modifier
 * @param {any} callback Callback renvoyant le résultat de la fonction Update
 */
function updateLine(_id, productUp, orderUp, quantityUp, callback) {
  Line.OrderlineModel.findById({ _id }, (err, Up) => {
    if (err) {
      callback(`Probleme lors du passage de la requ�te Update :${err}`);
    } else {
      Up.product = productUp;
      Up.order = orderUp;
      Up.quantity = quantityUp;
      Up.save();

      const data = `Product: ${productUp} | Order: ${orderUp} | Quantity: ${quantityUp}`;
      callback(data);
    }
  });
}

/** Export des fonctions addLine, deleteLine, updateLine */
export { addLine, deleteLine, updateLine };
