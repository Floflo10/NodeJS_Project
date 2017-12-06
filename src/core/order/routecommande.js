var bodyParser = require('body-parser');
const order = require('app/core/order');

function routecommande(app)
{
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : true}));

  app.get('/order', function (req, res) {
    order.ListOrder((data) =>{
     res.json(data);
   });
});

  app.get('/order/:id', function (req, res) {
    var id = req.params.id;
     order.GetOrderById(id, (data) =>{
       res.json(data);
     });
  });

  app.put('/order', function (req, res) {
    if(req.body.codebody === undefined || req.body.date === undefined || req.body.total === undefined || req.body.statusbody === undefined) {
      res.send('il faut envoyer les bon post');
    }else{
      var code = req.body.codebody;
      var date = req.body.date;
      var total = req.body.total;
      var status = req.body.statusbody;
      order.CreateOrder(code, date, total, status, (data)=>{
        res.send(data);
      });
    }

  });

  app.delete('/order/:id', function (req, res) {
    var id = req.params.id;
    order.DeleteOrder(id);
  });

  app.post('/order/:id', function (req, res) {
    if(req.body.codebody === undefined || req.body.date === undefined || req.body.total === undefined || req.body.statusbody === undefined) {
      res.send('il faut envoyer les bon post');
    }else{
      var id = req.params.id;
      var code = req.body.codebody;
      var total = req.body.total;
      var date = req.body.date;
      var status = req.body.statusbody;
      order.UpdateOrder(id, code, total, date, status, (data) =>{
        res.send(data);
      });
    }
  });
}

export {routecommande};
