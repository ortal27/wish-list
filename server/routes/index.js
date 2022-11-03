const express = require("express");
const cors = require('cors')
const axios =  require("axios");
const cheerio = require("cheerio");

const mongoConnect = require('../database/index').mongoConnect;
const Item = require('../models/item');

function init (app, port) {
    app.use(cors());
    app.use(express.json());

    app.get('/items',( req, res) => {
        Item.fetchAll()
        .then(items => {
            res.end(JSON.stringify(items));
        })
        .catch(err => console.log(err))
     });
     
     app.post('/' ,async (req, res) => {
         await getData(req.body.input);
         res.end();
     })
     
     async function getData(url){
         await axios(url).then(response => {
             const html = response.data;
             const $ = cheerio.load(html);
             const url = 'http:' + $('.goodsd-img', html).find('img').attr('data-src');
             const title = $('.goods-name', html).find('h1').find('span').text();
             const price = $('.goods-price__from', html).find('span').text();
             const createItem = new Item(url, title, price);
             createItem.save().then(result => {
                 console.log("createItem", createItem);
             }).catch(err => {
                 console.log(err);
             });
         })
         return;
     }
     mongoConnect(() => {
        app.listen(port);
    })
}


module.exports = {init};