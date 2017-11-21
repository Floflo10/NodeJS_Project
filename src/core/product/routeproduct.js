const product = require('app/core/product');

function routeproduct(app)
{

app.get('/product', function (req, res) {
  product.list((data) =>{
    res.json(data);
  });
});

app.get('/product/:id', function (req, res) {
    var id = req.params.id;
});

app.put('/product', function (req, res) {
    res.send('GET request to the homepage');
});

app.delete('/product/:id', function (req, res) {
    var id = req.params.id;
});

app.post('/product/:id', function (req, res) {
    var id = req.params.id;
});

}

export {routeproduct};
