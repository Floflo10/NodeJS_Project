/**
 * Module RouteMetier
 * @fileOverview Module de gestion des routes de type Metier
 * @author Florian Martines
 *
 * @requires app/core/metier
 *
 *
 * @module routemetier
 * @see app/core/routemetier
 */

const metier = require('app/core/metier');

/**
 * Fonction de création des routes pour Metier
 * @param {any} app Passage en paramètre de l'application
 */
function routemetier(app) {

    app.post('/order/:id/confirm', function (req, res) {
        var id = req.params.id;
        metier.confirmMetier(id, (data) => {
            res.send(data);
        });
    });

    app.get('/dashboard/order', function (req, res) {
        metier.turnoverMonth((data) => {
            res.send(data);
        });
    });

    app.get('/dashboard/product', function (req, res) {
        metier.bestProduct((data) => {
            res.send(data);
        });
    });


}

/** Créer Route de Metier */
export { routemetier };
