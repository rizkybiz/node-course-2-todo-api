//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');
    const db = client.db('TodoApp');

    // //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch.'}).then((result) => {
    //     console.log(result);
    // });

    // //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // //Challenge deleteMany
    // db.collection('Users').deleteMany({name: 'Justin'}).then((result) => {
    //     console.log(result);
    // });

    //Challenge findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bea157c20c3b0359872d117')}).then((result) =>{
        console.log(result);
    });
    //client.close();
});