function routemetier(app)
{


app.post('/order/:id/confirm', function (req, res) {
    var id = req.params.id;
});

app.get('/dashboard/order', function (req, res) {
    res.send('GET request to the homepage');
});

app.get('/dashboard/product', function (req, res) {
    res.send('GET request to the homepage');
});


}

export {routemetier};
