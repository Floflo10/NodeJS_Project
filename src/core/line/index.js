const Line = require('app/core/bdd');


function addLine(productAdd, orderAdd, quantityAdd, callback) {


    Line.OrderlineModel.create({ product: productAdd, order: orderAdd, quantity: quantityAdd }, function (err, product, order, quantity) {
        if (err) {
            callback('Probleme lors du passage de la requête Add :' + err);
        } else {
            var data = 'Product: ' + productAdd + ' | Order: ' + orderAdd + ' | Quantity: ' + quantityAdd;
            callback(data);
        }

    });


}

function deleteLine(idLine, callback) {
    Line.OrderlineModel.remove({ _id: idLine }, function (err) {
        if (err) {
            callback('Probleme lors du passage de la requête Delete :' + err);
        } else {
            var data = 'Suppression de' + idLine + 'effectuée';
        }
    });
}


function updateLine(_id, productUp, orderUp, quantityUp, callback) {


    Line.OrderlineModel.findById({ _id }, function (err, Up) {
        if (err) {
            callback('Probleme lors du passage de la requête Update :' + err);
        } else {
            Up.product = productUp;
            Up.order = orderUp;
            Up.quantity = quantityUp;
            Up.save();

            var data = 'Product: ' + productUp + ' | Order: ' + orderUp + ' | Quantity: ' + quantityUp;
            callback(data);
        }

    });


}


export { addLine, deleteLine, updateLine };