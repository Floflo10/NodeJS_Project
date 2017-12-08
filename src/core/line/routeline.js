/**
 * Module RouteLine
 * @fileOverview Module de gestion des routes de type Line
 * @author Florian Martines
 *
 * @requires app/core/line
 *
 *
 * @module routeline
 * @see app/core/routeline
 */

const linefonct = require('app/core/line');
const Line = require('app/core/bdd');

/**
 * Fonction de création des routes pour Line
 * @param {any} app Passage en paramètre de l'application
 */
function routeline(app) {

    app.put('/order/:orderid/line/', function (req, res) {

        var orderid = req.params.orderid;

        var product = req.body.product;
        var order = req.body.order;
        var quantity = req.body.quantity;

        linefonct.addLine(product, order, quantity, (data) => {
            res.send(data);
        });

    });

    app.delete('/order/:orderid/line/:lineid', function (req, res) {
        var orderid = req.params.orderid;
        var lineid = req.params.lineid;

        linefonct.deleteLine(lineid, (data) => {
            res.send(data);
        });


    });

    app.post('/order/:orderid/line/:lineid', function (req, res) {
        var orderid = req.params.orderid;
        var lineid = req.params.lineid;

        var product = req.body.product;
        var order = req.body.order;
        var quantity = req.body.quantity;

        linefonct.updateLine(lineid, product, order, quantity, (data) => {
            res.send(data);
        });


    });

}

/** Créer Route de Metier */
export { routeline };