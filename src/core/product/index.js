const product = require('app/core/bdd')


function list(callback){
product.ProductModel.find((err, data) =>{
callback(data);
});
}


function recup(idrecup, callback){
product.ProductModel.find({ _id: idrecup}, (data) =>{
  callback(data);
});
}

function add(name, price){
console.log(name);
console.log(price);

}

export {list, recup, add};
