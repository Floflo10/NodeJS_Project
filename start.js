const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/tasks', {useMongoClient: true}, (err) =>{

  if(err){
    throw err;
  }

  const TaskSchema = new mongoose.Schema({
    name: String,
    done: Boolean
  });

  const TaskModel = mongoose.model('Task', TaskSchema);


  let params = {
    name : 'Ma tache'
  }

  TaskModel.create(params, (error, tasks) =>{
    if(!error){
      console.log(tasks);
      TaskModel.find((error, tasks) => {
        if(!error){
          console.log(tasks);
        }
      });
    }else{
      console.log(error);
    }
  });


});
