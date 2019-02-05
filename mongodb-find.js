const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/test/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        return console.log(err);
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    db.collection('Users').find().count().then((count)=>{
        console.log("Number of users:", count);
    }, (err)=>{
        console.log('unable to fetch data from database');
    })

    client.close();
});