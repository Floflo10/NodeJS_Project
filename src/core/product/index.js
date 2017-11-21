const product = require('app/core/bdd')


function list(callback){
product.ProductModel.find((err, data) =>{
callback(data);
});
}

export {list};
