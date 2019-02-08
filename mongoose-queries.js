const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');

var id = '5c5bdab4a5b50324047bdf9a';

if(!ObjectID.isValid(id)){
    console.log('invalid id');
}

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('id not found');
    }
    console.log(id);
}).catch((e)=>{
    console.log(e);
})

