const express = require("express");
const router = require('./routes/index');
const PORT = 8080;

router.init(express(), PORT)



// $('.goodsd-img', html).each(function() {
        //    const url = $(this).find('img').attr('src');
        //    const dataSrc = $(this).find('img').attr('data-src');
        //    data.push({
        //     url,
        //     dataSrc
        //    });
        // });