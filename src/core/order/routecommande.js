const order = require('app/core/order');

/*
* Cette fonction permet d'utiliser les bonnes routes à l'aide de l'URL pour les commandes (orders)
* En fonction de la méthode utilisée (GET, POST, etc.), on associe les paramètres,
* par exemple la récupération de toutes les commandes ou d'une commande en particulier.
* @summary Description de la fonction routecommande.
*
* @author VELLA CYRIL <cyril.vella@ynov.com>
* @copyright VELLA CYRIL - 2017
*/

/*
* @function routecommande
*/

function routecommande(app) {

    /*
    * Utilisation du callback pour renvoyer les resultats de toutes les commandes sous forme de JSON.
    * @callback ExpressCallback
    */

    app.get('/order', function (req, res) {
        order.ListOrder((data) => {
            res.json(data);
        });
    });

    /*
    * Utilisation du callback pour renvoyer une commande sous forme de JSON.
    * @callback ExpressCallback
    */

    app.get('/order/:id', function (req, res) {
        var id = req.params.id;
        order.GetOrderById(id, (data) => {
            res.json(data);
        });
    });

    /*
    * Utilisation du callback pour créer et renvoyer une commande sous forme de JSON.
    * @callback ExpressCallback
    */

    app.put('/order', function (req, res) {
        if (req.body.codebody === undefined || req.body.date === undefined || req.body.total === undefined || req.body.statusbody === undefined) {
            res.send("Merci de respecter le typage des variables");
        } else {
            var code = req.body.codebody;
            var date = req.body.date;
            var total = req.body.total;
            var status = req.body.statusbody;
            order.CreateOrder(code, total, date, status, (data) => {
                res.send(data);
            });
        }

    });

    /*
    * Suppression d'une commande à l'aide de l'ID
    */

    app.delete('/order/:id', function (req, res) {
        var id = req.params.id;
        order.DeleteOrder(id);
    });

    /*
    * Utilisation du callback pour renvoyer et mettre à jour une commande sous forme de JSON.
    * @callback ExpressCallback
    */

    app.post('/order/:id', function (req, res) {
        if (req.body.codebody === undefined || req.body.date === undefined || req.body.total === undefined || req.body.statusbody === undefined) {
            res.send("Merci de respecter le typage des variables");
        } else {
            var id = req.params.id;
            var code = req.body.codebody;
            var total = req.body.total;
            var date = req.body.date;
            var status = req.body.statusbody;
            order.UpdateOrder(id, code, total, date, status, (data) => {
                res.send(data);
            });
        }
    });
}

/**
 * Export fonction de routage URL pour les commandes
 * @module routecommande
 */

export { routecommande };
