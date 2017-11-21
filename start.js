const mongoose = require('mongoose');


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




  const OrderModel = mongoose.model('Order', OrderSchema);
  const OrderlineModel = mongoose.model('Orderline', OrderlineSchema);
  const ProductModel = mongoose.model('Product', ProductSchema);


  let params = {
    Status : 'Mon ordre'
  };

  OrderModel.create(params, (error, tasks) =>{
    if(!error){
      console.log(tasks);
      OrderModel.find((error, tasks) => {
        if(!error){
          console.log(tasks);
        }
      });
    }else{
      console.log(error);
    }
  });


});
