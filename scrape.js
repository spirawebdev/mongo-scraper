const request = require('request');
const cheerio = require('cheerio');

request('https://honeysanime.com', (error, response, html) => {
    if ( !error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const itemOne = $('#wpi_ab_twothree-2');

        console.log(itemOne.find(".item-1").find('.fz10').text());
        console.log(itemOne.find(".item-1").attr('href'));
        console.log(itemOne.find(".item-2").find('.fz10').text());
        console.log(itemOne.find(".item-3").find('.fz10').text());
        console.log(itemOne.find(".item-4").find('.fz10').text());
        console.log(itemOne.find(".item-5").find('.fz10').text());
        console.log(itemOne.find(".item-6").find('.fz10').text());
        console.log(itemOne.find(".item-7").find('.fz10').text());
        console.log(itemOne.find(".item-8").find('.fz10').text());
        
       

    }

});
