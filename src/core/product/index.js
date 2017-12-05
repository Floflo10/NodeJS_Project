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
  if(!err){
     callback(data);
  }else{
    callback('probleme de requête');
  }
 });




}

function add(nameAdd, priceAdd, callback){



product.ProductModel.create({ name: nameAdd, Price: priceAdd }, function (err, name, Price) {
  if (err){
  callback('probleme de requête');
  }else{
    var data = nameAdd+' et '+priceAdd;
    callback(data);
  }
  // saved!
})


}

function DeleteProd(idprod, callback){
  console.log(idprod);
  product.ProductModel.remove({ _id: idprod}, function (err) {
  if(err){
  callback('probleme lors du delete');
  }else{
    console.log('ça marche');
  }
  // removed!
});
}


function UpdateProd(idprod, nameUpdate, priceUpdate, callback){

  product.ProductModel.findById(idprod, function (err, doc) {
    if(!err){
        doc.name = nameUpdate;
        doc.Price = priceUpdate;
        doc.save(callback(doc));
    }else{
      callback('probleme d update');
    }

});

}

export {list, recup, add, DeleteProd, UpdateProd};
