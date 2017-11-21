function routeline(app)
{


app.put('/order/:orderid/line/', function (req, res) {
    var orderid = req.params.orderid;
});

app.delete('/order/:orderid/line/:lineid', function (req, res) {
    var orderid = req.params.orderid;
    var lineid = req.params.lineid;
});

app.post('/order/:orderid/line/:lineid', function (req, res) {
    var orderid = req.params.orderid;
    var lineid = req.params.lineid;
});

}

export {routeline};
