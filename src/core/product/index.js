/**
 * Module Product
 * @fileOverview Module contenant les fonctions CRUD pour Product
 * @author Ismael Hadj-Arab
 *
 * @requires app/core/bdd
 *
 *
 * @module product
 * @see app/core/product
 */

const product = require("app/core/bdd");

/**
 * Fonction correspodant au GET listant tout le products
 * @param {any} callback Callback renvoyant le résultat de la fonction list
 */
function list(callback) {
  product.ProductModel.find((err, data) => {
    callback(data);
  });
}

/**
 * Fonction correspodant au GET renvoyant un produit selon son ID
 * @param {Number} idrecup ID du produit à renvoyer
 * @param {any} callback Callback renvoyant le résultat de la fonction recup
 */
function recup(idrecup, callback) {
  product.ProductModel.findById(idrecup, (err, data) => {
    if (!err) {
      callback(data);
    } else {
      callback("probleme de requête");
    }
  });
}

/**
 * Fonction correspodant au PUT créant un nouveau produit
 * @param {string} nameAdd Nom du nouveau produit
 * @param {Number} priceAdd Prix du nouveau produit
 * @param {any} callback Callback renvoyant le résultat de la fonction add
 */
function add(nameAdd, priceAdd, callback) {
  product.ProductModel.create({ name: nameAdd, Price: priceAdd }, (err, name, Price) => {
    if (err) {
      callback("probleme de requête");
    } else {
      const data = `${nameAdd} et ${priceAdd}`;
      callback(data);
    }
  });
}

/**
 * Fonction correspodant au DELETE supprimant un produit
 * @param {Number} idprod ID du produit à suuprprimer
 * @param {any} callback Callback renvoyant le résultat de la fonction deletePost
 */
function DeleteProd(idprod, callback) {
  console.log(idprod);
  product.ProductModel.remove({ _id: idprod }, (err) => {
    if (err) {
      callback("probleme lors du delete");
    } else {
      console.log("ça marche");
    }
  });
}

/**
 * Fonction correspodant au POST mettant à jours un produit
 * @param {Number} idprod ID du produit à mettre à jours
 * @param {string} nameUpdate Nouveau nom du produit à mettre à jours
 * @param {Number} priceUpdate Nouveau prix du produit à mettre à jours
 * @param {any} callback Callback renvoyant le résultat de la fonction UpdateProd
 */
function UpdateProd(idprod, nameUpdate, priceUpdate, callback) {
  product.ProductModel.findById(idprod, (err, doc) => {
    if (!err) {
      doc.name = nameUpdate;
      doc.Price = priceUpdate;
      doc.save(callback(doc));
    } else {
      callback("probleme d update");
    }
  });
}

/** Export des fonctions list, recup, add, DeleteProd, UpdateProd */
export { list, recup, add, DeleteProd, UpdateProd };
