/**
 * Module RouteProduct
 * @fileOverview Module de gestion des routes de type Product
 * @author Hismael Hadj-Arab
 *
 * @requires app/core/product
 *
 *
 * @module routeproduct
 * @see app/core/routeproduct
 */

const product = require("app/core/product");

/**
 * Fonction de cr�ation des routes pour Product
 * @param {any} app Passage en param�tre de l'application
 */

function routeproduct(app) {
  app.get("/product", (req, res) => {
    product.list((data) => {
      res.json(data);
    });
  });

  app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    product.recup(id, (data) => {
      res.json(data);
    });
  });

  app.put("/product", (req, res) => {
    const price = req.body.price;
    const name = req.body.name;
    product.add(name, price, (data) => {
      res.send(data);
    });
  });

  app.delete("/product/:id", (req, res) => {
    const id = req.params.id;
    product.DeleteProd(id, (data) => {
      res.send(data);
    });
  });

  app.post("/product/:id", (req, res) => {
    const id = req.params.id;
    const price = req.body.price;
    const name = req.body.name;
    product.UpdateProd(id, name, price, (callback) => {
      res.json(callback);
    });
  });
}

/** Cr�er Route de Product */
export { routeproduct };
