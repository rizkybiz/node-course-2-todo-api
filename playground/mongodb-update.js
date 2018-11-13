//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bea147077c1e125884943d8')
    },{
        $set: {
            name: 'Justin'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=> {
        console.log(JSON.stringify(result, undefined, 2));
    });
    //client.close();
});