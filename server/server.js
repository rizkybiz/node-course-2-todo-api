var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false

    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: '  Edit this video   '
// });

// newTodo.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log('Unable to save the todo');
// });

//new user model
//email - require it - trim it - type String - set min length 1

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'newguy@example.com       '
});

newUser.save().then((doc) => {
    console.log('User: ', JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log(e);
});