const express = require('express');
const bdd = require('app/core/bdd');
const route = require('app/core/routage');
const bodyParser = require('body-parser');

/*
*
* @author VELLA CYRIL <cyril.vella@ynov.com>
* @copyright VELLA CYRIL - 2017
*/

/**
 * Création du serveur web
 * @class
 */

class Webserver {

    constructor() {
        this.express = null;
        this.server = null;

    }

    start(port, callback) {
        this.express = express();

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));

        this.server = this.express.listen(port, (err) => {
            if (typeof callback === 'function') {
                callback(err, this.express);
            }

        });
    }

    close(callback) {
        if (this.server === null) {
            callback(new Error('Web Server is not running'));
        } else {
            this.server.close(((err) => {
                if (typeof callback === 'function') {
                    callback(err);
                }
            }
            ));
        }
    }
}

export default new Webserver();
