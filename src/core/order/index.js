const order = require('app/core/bdd');

function list(callback)
{
  order.Orderline.find((err, data) => {
    callback(data);
  });
}

function recup(idrecup, callback)
{

}

function add(name, price)
{
  console.log(name);
  console.log(price);
}

export {list, recup, add};
