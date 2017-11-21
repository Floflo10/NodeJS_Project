function routecommande(app)
{

app.get('/order', function (req, res) {
    res.send('GET request to the homepage');
});

app.get('/order/:id', function (req, res) {
    var id = req.params.id;
});

app.put('/order', function (req, res) {
    res.send('GET request to the homepage');
});

app.delete('/order/:id', function (req, res) {
    var id = req.params.id;
});

app.post('/order/:id', function (req, res) {
    var id = req.params.id;
});

}

export {routecommande};
