const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/test/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        return console.log(err);
    }
    console.log('connected to mongodb server');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c58f6408f6863785abebf49"),
    // },{
    //     $set:{
    //         completed:true,
    //     }
    
    // }, {
    //     returnOriginal:false,
    // }).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log('update unsuccessful!');
    // })

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5c58f5fd69c2df31800041d2"),
    }, {
        $set: {
            text : 'Something to do',
        },

        $inc: {
            num: -2,
        }
    }, {
        returnOriginal: false,
    }).then((result)=>{
        console.log(result);
    }, (err)=>{
        console.log('unable to update');
    });


    client.close();
});