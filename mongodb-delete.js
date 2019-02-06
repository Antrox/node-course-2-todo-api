const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/test/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        return console.log(err);
    }
    console.log('connected to mongodb server');

    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result, 'deleted successfully');
    // }, (err)=>{
    //     console.log('could not delete successfully!');
    // });

    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log('could not delete successfully');
    // })

    db.collection('Todos').findOneAndDelete({text:'Eat Lunch'}).then((result)=>{
        console.log(result);
    }, (err)=>{
        console.log('could not delete');
    })


    client.close();
});