const bdd = require('app/core/bdd/index.js');

function routeproduct(app)
{

app.get('/product', function (req, res) {
  
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
