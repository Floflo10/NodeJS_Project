const order = require('app/core/bdd');

function ListOrder(callback){
  order.OrderModel.find((err, data) =>{
    if(!err)
    {
      callback(data);
    }else{
      data = "Erreur lors de la récupération des commandes";
      callback(data);
    }
  });
}

function GetOrderById(idrecup, callback)
{
  order.OrderModel.findById(idrecup, function(err, data) {
    if(!err)
    {
      callback(data);
    }
    else {
      data = "Erreur lors de la récupération de la commande.";
      callback(data);
    }
   });
}

function CreateOrder(codeAdd, totalAdd, dateAdd, statusAdd, callback)
{
  order.OrderModel.create({ code: codeAdd, date: dateAdd, total: totalAdd, Status: statusAdd }, function (err, code, date, total, Status) {

      var data = codeAdd + ' , '+ dateAdd + ' , ' + totalAdd + ' et ' + statusAdd;
      callback(data);

  })
}


function DeleteOrder(idprod)
{
    order.OrderModel.remove({ _id: idprod}, function (err) {
    if(err){
      console.log("Erreur lors de la suppression d'une commande.")
    }else{
      console.log('Commande supprimée avec succès.');
    }
  });
}

function UpdateOrder(idprod, codeUpdate, totalUpdate, dateUpdate, StatusUpdate, callback){
  order.OrderModel.findById(idprod, function (err, doc) {
    if (!err)
    {
      doc.code = codeUpdate;
      doc.total = totalUpdate;
      doc.date = dateUpdate;
      doc.Status = StatusUpdate;

      doc.save(callback(doc));
    }else{
      doc = "Erreur lors de la mise à jour de la commande.";
      callback(doc);
    }
  });
}



export {ListOrder, GetOrderById, CreateOrder, DeleteOrder, UpdateOrder};
