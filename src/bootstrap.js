/**
* @fileOverview   FIchier de démarrage du serveur créant le service sur le port indiqué
* @author Hismael Hadj-Arab
* @author Florian Martines
* @author Cyril Vella
*
* @requieres app/core/webserver
* @requieres app/core/bdd
* @requieres app/core/routage
*/


import Webserver from 'app/core/webserver';
const bdd = require('app/core/bdd');
const routage = require('app/core/routage');


bdd.ConnectDB((err) => {

    Webserver.start(3000, (err, express) => {
        if (!err) {
            console.log('Webserver started');
            routage.route(express);
        }
    });
});
