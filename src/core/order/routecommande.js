var bodyParser = require('body-parser');
const order = require('app/core/order');

function routecommande(app)
{
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.get('/order', function (req, res) {
    order.list((data) => {
      res.json(data);
    });
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
