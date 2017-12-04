const line = require('app/core/bdd').OrderlineModel;

function addLine(product, order, quantity) {

    var Orderline = new Orderline();

    Orderline.product = product;
    Orderline.order = order;
    Orderline.quantity = quantity;

    Orderline.save(function (err) {
        if (err)
            res.send(err);
    });
}


export { addline };