const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5beaea9000b6540fd1d2f8b3';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found.');
//     }
//     console.log('Todo by id ', todo);
// }).catch((e) => console.log(e));

//user.findById()
User.findById(id).then((user) => {
    if (!user){
        return console.log('User does not exist');
    }
    console.log('User:', JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});