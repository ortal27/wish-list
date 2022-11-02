const axios =  require("axios");
const express = require("express");
const cheerio = require("cheerio");
const cors = require('cors')
const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

const data = [];

app.get('/items',( req, res) => {
    res.end(JSON.stringify(data));
})
app.post('/' ,async (req, res) => {
    console.log("url:", req.body);
    await getData(req.body.input);
    res.end(JSON.stringify(data));
})

async function getData(url){
    await axios(url).then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const url = 'http:' + $('.goodsd-img', html).find('img').attr('data-src');
        const title = $('.goods-name', html).find('h1').find('span').text();
        const price = $('.goods-price__from', html).find('span').text();
        data.push({
            url,
            title,
            price
        });
        console.log(data);
    })
    return;
}


app.listen(PORT, () => console.log("listening to port :", PORT))

// $('.goodsd-img', html).each(function() {
        //    const url = $(this).find('img').attr('src');
        //    const dataSrc = $(this).find('img').attr('data-src');
        //    data.push({
        //     url,
        //     dataSrc
        //    });
        // });