const metierfonct = require('app/core/metier');
const Metier = require('app/core/bdd');

function routemetier(app) {

    app.post('/order/:id/confirm', function (req, res) {
        var id = req.params.id;
        metierfonct.confirmMetier(id, (data) => {
            res.send(data);
        });
    });

    app.get('/dashboard/order', function (req, res) {
        metierfonct.turnoverMonth((data) => {
            res.send(data);
        });
    });

    app.get('/dashboard/product', function (req, res) {
        metierfonct.bestProduct((data) => {
            res.send(data);
        });
    });


}

export { routemetier };
