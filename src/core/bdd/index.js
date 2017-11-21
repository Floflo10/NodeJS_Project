const mongoose = require('mongoose');
let OrderModel;
let OrderlineModel;
let ProductModel;

function connection(callback){


  mongoose.connect('mongodb://127.0.0.1/dbcommerce', {useMongoClient: true}, (err) =>{

    if(err){
      throw err;
    }

    const OrderSchema = new mongoose.Schema({
      code: String,
      date: Date,
      total: Number,
      Status: String
    });

    const OrderlineSchema = new mongoose.Schema({
      product: Number,
      order: Number,
      quantity: Number
    });


    const ProductSchema = new mongoose.Schema({
      name: String,
      Price: Number
    });




     OrderModel = mongoose.model('Order', OrderSchema);
     OrderlineModel = mongoose.model('Orderline', OrderlineSchema);
     ProductModel = mongoose.model('Product', ProductSchema);

callback();

});

}


export {connection, OrderModel, OrderlineModel, ProductModel};
