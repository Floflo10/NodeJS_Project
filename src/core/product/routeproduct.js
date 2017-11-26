const product = require('app/core/product');
var bodyParser = require('body-parser');


function routeproduct(app)
{
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : true}));

app.get('/product', function (req, res) {
  product.list((data) =>{
    res.json(data);
  });
});

app.get('/product/:id', function (req, res) {
    var id = req.params.id;
    product.recup(id, (data) =>{
      res.json(data);
    });
});

app.put('/product', function (req, res) {
  var values = req.body;
  console.log(values);
  var name = 'maison';
  var price = 12;
    product.add(name, price);
});

app.delete('/product/:id', function (req, res) {
    var id = req.params.id;
});

app.post('/product/:id', function (req, res) {
    var id = req.params.id;
});

}

export {routeproduct};
