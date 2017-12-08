/**
 * Module Order
 * @fileOverview Module contenant les fonctions CRUD pour Order
 * @author Cyril Vella
 *
 * @requires app/core/bdd
 *
 *
 * @module order
 * @see app/core/order
 */

const order = require("app/core/bdd");


/**
 * Fonction correspodant au GET listant toutes les commandes
 * @param {any} callback Callback renvoyant le résultat de la fonction ListOrder
 */
function ListOrder(callback) {
  order.OrderModel.find((err, data) => {
    if (!err) {
      callback(data);
    } else {
      data = "Erreur lors de la récupération des commandes";
      callback(data);
    }
  });
}

/**
 * Fonction correspodant au GET renvoyant une commande selon son ID
 * @param {Number} idrecup ID de la commande à renvoyer
 * @param {any} callback Callback renvoyant le résultat de la fonction GetOrderById
 */
function GetOrderById(idrecup, callback) {
  order.OrderModel.findById(idrecup, (err, data) => {
    if (!err) {
      callback(data);
    } else {
      data = "Erreur lors de la récupération de la commande.";
      callback(data);
    }
  });
}

/**
 * Fonction correspodant au PUT créant une nouvelle commande
 * @param {String} codeAdd Code de la nouvelle commande
 * @param {Number} totalAdd Total de la nouvelle commande
 * @param {Date} dateAdd Date de la nouvelle commande
 * @param {string} statusAdd Status de la nouvelle commande
 * @param {any} callback Callback renvoyant le résultat de la fonction CreateOrder
 */
function CreateOrder(codeAdd, totalAdd, dateAdd, statusAdd, callback) {
  order.OrderModel.create({
    code: codeAdd, total: totalAdd, date: dateAdd, Status: statusAdd,
  }, (err, code, date, total, Status) => {
    if (!err) {
      var data = `${codeAdd} , ${dateAdd} , ${totalAdd} et ${statusAdd}`;
      callback(data);
    } else {
      data = "Erreur lors de la création d'une commande";
      callback(data);
    }
  });
}

/**
 * Fonction correspodant au DELETE supprimant une commande
 * @param {Number} idprod ID de la commande à suuprprimer
 * @param {any} callback Callback renvoyant le résultat de la fonction DeleteOrder
 */
function DeleteOrder(idprod) {
  order.OrderModel.remove({ _id: idprod }, (err) => {
    if (err) {
      console.log("Erreur lors de la suppression d'une commande.");
    } else {
      console.log("Commande supprimée avec succès.");
    }
  });
}

/**
 * Fonction correspodant au POST mettant à jours une commande
 * @param {Number} idprod Id de la commande à modifier
 * @param {string} codeUpdate Nouveau code de la commande
 * @param {Number} totalUpdate Nouveau total de la commande
 * @param {Date} dateUpdate Nouvelle date de la commande
 * @param {string} StatusUpdate Nouveau status de la commande
 * @param {any} callback Callback renvoyant le résultat de la fonction UpdateOrder
 */
function UpdateOrder(idprod, codeUpdate, totalUpdate, dateUpdate, StatusUpdate, callback) {
  order.OrderModel.findById(idprod, (err, doc) => {
    if (!err) {
      doc.code = codeUpdate;
      doc.total = totalUpdate;
      doc.date = dateUpdate;
      doc.Status = StatusUpdate;

      doc.save(callback(doc));
    } else {
      doc = "Erreur lors de la mise à jour de la commande.";
      callback(doc);
    }
  });
}

/** Export des fonctions ListOrder, GetOrderById, CreateOrder, DeleteOrder, UpdateOrder */
export { ListOrder, GetOrderById, CreateOrder, DeleteOrder, UpdateOrder };
