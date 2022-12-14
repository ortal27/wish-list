const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
require('dotenv').config();
const uri = process.env.MONGO_URI;
let _db;

const mongoConnect = (cb) => {
    MongoClient.connect(uri)
    .then(client => {
        console.log("Connected!");
        _db = client.db();
        cb();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw "No database found!";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;