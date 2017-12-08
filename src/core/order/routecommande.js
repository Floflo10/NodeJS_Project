/**
 * Module routecommande
 * @fileOverview Module de gestion des routes de type Order
 * @author Cyril Bella
 *
 * @requires app/core/order
 *
 *
 * @module routecommande
 * @see app/core/routecommande
 */

const order = require("app/core/order");

/**
 * Fonction de création des routes pour Order
 * @param {any} app Passage en paramètre de l'application
 */

function routecommande(app) {
  app.get("/order", (req, res) => {
    order.ListOrder((data) => {
      res.json(data);
    });
  });

  app.get("/order/:id", (req, res) => {
    const id = req.params.id;
    order.GetOrderById(id, (data) => {
      res.json(data);
    });
  });

  app.put("/order", (req, res) => {
    if (req.body.codebody === undefined || req.body.date === undefined || req.body.total === undefined || req.body.statusbody === undefined) {
      res.send("Merci de respecter le typage des variables");
    } else {
      const code = req.body.codebody;
      const date = req.body.date;
      const total = req.body.total;
      const status = req.body.statusbody;
      order.CreateOrder(code, total, date, status, (data) => {
        res.send(data);
      });
    }
  });

  app.delete("/order/:id", (req, res) => {
    const id = req.params.id;
    order.DeleteOrder(id);
  });

  app.post("/order/:id", (req, res) => {
    if (req.body.codebody === undefined || req.body.date === undefined || req.body.total === undefined || req.body.statusbody === undefined) {
      res.send("Merci de respecter le typage des variables");
    } else {
      const id = req.params.id;
      const code = req.body.codebody;
      const total = req.body.total;
      const date = req.body.date;
      const status = req.body.statusbody;
      order.UpdateOrder(id, code, total, date, status, (data) => {
        res.send(data);
      });
    }
  });
}

/** Créer Route de Commande */
export { routecommande };
