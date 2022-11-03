const getDb = require('../database/index').getDb;

class Item {
    constructor(url, title, price){
        this.url = url;
        this.title = title;
        this.price = price;
    }
    save() {
        const db = getDb();
        return db.collection('items').insertOne(this)
        .then(result =>{
            console.log(result);
        })
        .catch(err =>{
            console.log(err);
        });
    }

    static fetchAll(){
        const db = getDb();
        return db.collection('items').find().toArray()
        .then(items => {
            console.log(items);
            return items;
        }).catch(err =>{
            console.log(err);
        });
    }
}

module.exports = Item;