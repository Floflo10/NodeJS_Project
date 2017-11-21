const routecommande = require('app/core/webserver/routecommande.js');
const routeproduct = require('app/core/webserver/routeproduct.js');
const routeline = require('app/core/webserver/routeline.js');
const routemetier = require('app/core/webserver/routemetier.js');

function route(app)
{

routecommande.routecommande(app);
routeproduct.routeproduct(app);
routeline.routeline(app);
routemetier.routemetier(app);


}

export {route};
