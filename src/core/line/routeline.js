const linefonct = require('app/core/line');
const Line = require('app/core/bdd');


function routeline(app)
{

    app.put('/order/:orderid/line/', function (req, res) {
        var orderid = req.params.orderid;
        linefonct.addLine(req, res);

});

app.delete('/order/:orderid/line/:lineid', function (req, res) {
    var orderid = req.params.orderid;
    var lineid = req.params.lineid;
});

app.post('/order/:orderid/line/:lineid', function (req, res) {
    var orderid = req.params.orderid;
    var lineid = req.params.lineid;
});

app.get('/order/bouse', function (req, res) {
    Line.find(function (err, Lines) {
        if (err)
            res.send(err);

        res.json(Lines);
    });

});

}

export {routeline};
