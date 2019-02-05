const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/test/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        return console.log(err);
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text:'something to do',
        completed:false,
    },(err, result)=>{
        if(err){
            console.log('unable to insert todos', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    })

    // db.collection('Users').insertOne({
    //     name:'abc',
    //     age:25,
    //     location:'SB',
    // }, (err, result)=>{
    //     if(err){
    //         console.log('unable to insert', err);
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined,2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
});