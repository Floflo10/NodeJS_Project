/**
 * Module routecommande
 * @fileOverview Module de gestion des routes de type Order
 * @author Cyril Vella
 *
 * @requires app/core/order
 *
 *
 * @module routecommande
 * @see app/core/routecommande
 */

const order = require('app/core/order');

/**
 * Fonction de création des routes pour Order
 * @param {any} app Passage en paramètre de l'application
 */

function routecommande(app) {

    app.get('/order', function (req, res) {
        order.ListOrder((data) => {
            res.json(data);
        });
    });

    app.get('/order/:id', function (req, res) {
        var id = req.params.id;
        order.GetOrderById(id, (data) => {
            res.json(data);
        });
    });

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

    app.delete('/order/:id', function (req, res) {
        var id = req.params.id;
        order.DeleteOrder(id);
    });

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

/** Créer Route de Commande */
export { routecommande };
