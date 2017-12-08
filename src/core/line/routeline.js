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

const linefonct = require("app/core/line");
const Line = require("app/core/bdd");

/**
 * Fonction de cr�ation des routes pour Line
 * @param {any} app Passage en param�tre de l'application
 */
function routeline(app) {
  app.put("/order/:orderid/line/", (req, res) => {
    const orderid = req.params.orderid;

    const product = req.body.product;
    const order = req.body.order;
    const quantity = req.body.quantity;

    linefonct.addLine(product, order, quantity, (data) => {
      res.send(data);
    });
  });

  app.delete("/order/:orderid/line/:lineid", (req, res) => {
    const orderid = req.params.orderid;
    const lineid = req.params.lineid;

    linefonct.deleteLine(lineid, (data) => {
      res.send(data);
    });
  });

  app.post("/order/:orderid/line/:lineid", (req, res) => {
    const orderid = req.params.orderid;
    const lineid = req.params.lineid;

    const product = req.body.product;
    const order = req.body.order;
    const quantity = req.body.quantity;

    linefonct.updateLine(lineid, product, order, quantity, (data) => {
      res.send(data);
    });
  });
}

/** Cr�er Route de Metier */
export { routeline };
