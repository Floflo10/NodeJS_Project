const product = require('app/core/product');


function routeproduct(app) {

    app.get('/product', function (req, res) {
        product.list((data) => {
            res.json(data);
        });
    });

    app.get('/product/:id', function (req, res) {
        var id = req.params.id;
        product.recup(id, (data) => {
            res.json(data);
        });
    });

    app.put('/product', function (req, res) {
        var price = req.body.price;
        var name = req.body.name;
        product.add(name, price, (data) => {
            res.send(data);
        });
    });

    app.delete('/product/:id', function (req, res) {
        var id = req.params.id;
        product.DeleteProd(id, (data) => {
            res.send(data);
        });
    });

    app.post('/product/:id', function (req, res) {
        var id = req.params.id;
        var price = req.body.price;
        var name = req.body.name;
        product.UpdateProd(id, name, price, (callback) => {
            res.json(callback);
        });
    });

}

export { routeproduct };
