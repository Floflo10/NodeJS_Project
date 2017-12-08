const routecommande = require('app/core/order/routecommande.js');
const routeproduct = require('app/core/product/routeproduct.js');
const routeline = require('app/core/line/routeline.js');
const routemetier = require('app/core/metier/routemetier.js');

/*
* Fonction regroupant toutes les routes de l'API (commandes, produits, etc.)
* @summary Point d'entrée de l'API - Routes URL.
*
* @author VELLA CYRIL <cyril.vella@ynov.com>
* @copyright VELLA CYRIL - 2017
*/

function route(app) {
    routecommande.routecommande(app);
    routeproduct.routeproduct(app);
    routeline.routeline(app);
    routemetier.routemetier(app);
}

/**
 * Export fonction de routage URL
 * @module route
 */

export { route };
