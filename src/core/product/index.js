const product = require('app/core/bdd')


function list(callback){
product.ProductModel.find((err, data) =>{
callback(data);
});
}


function recup(idrecup, callback){
/**product.ProductModel.find({ _id: idrecup}, (data) =>{
  callback(data);
});**/



product.ProductModel.findById(idrecup, function(err, data) {
   callback(data);
 });




}

function add(nameAdd, priceAdd, callback){



product.ProductModel.create({ name: nameAdd, Price: priceAdd }, function (err, name, Price) {
  if (err){
    return handleError(err);
  }else{
    var data = nameAdd+' et '+priceAdd;
    callback(data);
  }
  // saved!
})


}

export {list, recup, add};
