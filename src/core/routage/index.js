/**
 * Module Routage
 * @fileOverview Module de création des différentes routes
 * @author Hismael Hadj-Arab
 * @author Florian Martines
 * @author Cyril Vella
 *
 * @requires app/core/metier
 * @requires app/core/product
 * @requires app/core/line
 * @requires app/core/order
 *
 *
 * @module route
 * @see app/core/routage
 */


const routecommande = require('app/core/order/routecommande.js');
const routeproduct = require('app/core/product/routeproduct.js');
const routeline = require('app/core/line/routeline.js');
const routemetier = require('app/core/metier/routemetier.js');


function route(app) {
    routecommande.routecommande(app);
    routeproduct.routeproduct(app);
    routeline.routeline(app);
    routemetier.routemetier(app);
}

/** Créer Routes */
export { route };
