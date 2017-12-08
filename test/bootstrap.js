import Webserver from 'app/core/webserver';
const bdd = require('app/core/bdd');
const routage = require('app/core/routage');


/*
* Connexion au serveur local sur le port 3000 avec l'utilisation de Express.JS
* @summary Connexion au serveur.
*
* @author VELLA CYRIL <cyril.vella@ynov.com>
* @copyright VELLA CYRIL - 2017
*/

bdd.ConnectDB((err) => {

    Webserver.start(3000, (err, express) => {
        if (!err) {
            console.log('Webserver started');
            routage.route(express);
        }
    });
});
