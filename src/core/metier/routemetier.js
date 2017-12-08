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

const metier = require("app/core/metier");

/**
 * Fonction de cr�ation des routes pour Metier
 * @param {any} app Passage en param�tre de l'application
 */
function routemetier(app) {
  app.post("/order/:id/confirm", (req, res) => {
    const id = req.params.id;
    metier.confirmMetier(id, (data) => {
      res.send(data);
    });
  });

  app.get("/dashboard/order", (req, res) => {
    metier.turnoverMonth((data) => {
      res.send(data);
    });
  });

  app.get("/dashboard/product", (req, res) => {
    metier.bestProduct((data) => {
      res.send(data);
    });
  });
}

/** Cr�er Route de Metier */
export { routemetier };
