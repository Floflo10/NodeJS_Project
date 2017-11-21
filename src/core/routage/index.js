const routecommande = require('app/core/order/routecommande.js');
const routeproduct = require('app/core/product/routeproduct.js');
const routeline = require('app/core/line/routeline.js');
const routemetier = require('app/core/metier/routemetier.js');

function route(app)
{

routecommande.routecommande(app);
routeproduct.routeproduct(app);
routeline.routeline(app);
routemetier.routemetier(app);


}

export {route};
