const order = require('app/core/bdd');

function list(callback)
{
  order.OrderModel.find((err, data) => {
    callback(data);
  });
}

function recup(idrecup, callback)
{
  product.OrderModel.find({_id: idrecup}, (data) =>{
    callback(data);
  });
}

function add(name, price)
{
  console.log(name);
  console.log(price);
}

export {list, recup, add};
