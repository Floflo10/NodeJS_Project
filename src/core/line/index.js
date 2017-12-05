const Line = require('app/core/bdd');


function addLine(req, res) {

    console.log(req.body);


    Line.OrderlineModel.create({ product: req.body.product, order: req.body.order, quantity: req.body.quantity }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Bite added to the locker!', data: Line });
        }
            
    });

    

    console.log(Line);

}

export {addLine};