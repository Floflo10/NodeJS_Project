/**
 * Module Webserver
 * @fileOverview Module de création du serveur
 * @author Hismael Hadj-Arab
 * @author Florian Martines
 * @author Cyril Vella
 *
 * @requires NPM:express
 * @requires NPM:body-parser
 * @requires app/core/bdd
 * @requires app/core/route
 *
 *
 * @module webserver
 * @see app/core/webserver
 */

const express = require("express");
const bdd = require("app/core/bdd");
const route = require("app/core/routage");
const bodyParser = require("body-parser");


/**
 * Class Webserver
 * @class
 * @classdesc Création du Webserveur et injection du body-parseur
 */

class Webserver {
  constructor() {
    this.express = null;
    this.server = null;
  }

  /**
     * Méthode de création du Webserveur
     * @param {Number} port Port de connection au Webserveur
     * @param {callback} callback Callback gérant les paramètre de lancement du serveur
     */
  start(port, callback) {
    this.express = express();

    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));

    this.server = this.express.listen(port, (err) => {
      if (typeof callback === "function") {
        callback(err, this.express);
      }
    });
  }
  /**
     * Méthode de fermeture du Webserveur
     * @param {callbzck} callback Callback gérant les paramètre de fermeture du serveur
     */
  close(callback) {
    if (this.server === null) {
      callback(new Error("Web Server is not running"));
    } else {
      this.server.close(((err) => {
        if (typeof callback === "function") {
          callback(err);
        }
      }
      ));
    }
  }
}

/** Créer Webserver */
export default new Webserver();
