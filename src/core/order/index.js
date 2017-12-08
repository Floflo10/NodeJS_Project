const order = require('app/core/bdd');

/*
* Ces fonctions permettent de traiter les divers méthodes (suppression commande, etc.)
* Elles possèdent toute une gestion d'erreur en cas d'une mauvaise entrée des valeurs ou autre.
* @summary Description des fonctions.
*
* @author VELLA CYRIL <cyril.vella@ynov.com>
* @copyright VELLA CYRIL - 2017
*/

/*
* @function ListOrder
*/
function ListOrder(callback) {
    /*
    * Utilisation de find pour renvoyer toutes les commandes
    * @callback find
    */

    order.OrderModel.find((err, data) => {
        if (!err) {
            callback(data);
        } else {
            data = "Erreur lors de la récupération des commandes";
            callback(data);
        }
    });
}

/*
* @function GetOrderById
*/

function GetOrderById(idrecup, callback) {
    /*
    * Utilisation de find pour renvoyer une commande (grâce à l'id)
    * @callback findById
    */

    order.OrderModel.findById(idrecup, function (err, data) {
        if (!err) {
            callback(data);
        }
        else {
            data = "Erreur lors de la récupération de la commande.";
            callback(data);
        }
    });
}

/*
* @function CreateOrder
*/

function CreateOrder(codeAdd, totalAdd, dateAdd, statusAdd, callback) {
    /*
    * Utilisation de create une commande
    * @callback create
    */

    order.OrderModel.create({ code: codeAdd, total: totalAdd, date: dateAdd, Status: statusAdd }, function (err, code, date, total, Status) {
        if (!err) {
            var data = codeAdd + ' , ' + dateAdd + ' , ' + totalAdd + ' et ' + statusAdd;
            callback(data);
        } else {
            data = "Erreur lors de la création d'une commande";
            callback(data);
        }
    });
}

/*
* @function DeleteOrder
*/

function DeleteOrder(idprod) {
    /*
    * Utilisation de delete pour supprimer une commande
    * @callback remove
    */

    order.OrderModel.remove({ _id: idprod }, function (err) {
        if (err) {
            console.log("Erreur lors de la suppression d'une commande.");
        } else {
            console.log('Commande supprimée avec succès.');
        }
    });
}

/*
* @function UpdateOrder
*/

function UpdateOrder(idprod, codeUpdate, totalUpdate, dateUpdate, StatusUpdate, callback) {
    /*
    * Utilisation de findById & save pour mettre à jour une commande
    * @callback remove
    */

    order.OrderModel.findById(idprod, function (err, doc) {
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

/**
 * Export fonction de routage URL
 * @module ListOrder, GetOrderById, CreateOrder, DeleteOrder, UpdateOrder
 */

export { ListOrder, GetOrderById, CreateOrder, DeleteOrder, UpdateOrder };
