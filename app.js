const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: "2E6WOQytyanwtSg175nDukXwn",
    consumer_secret: "jz0RTDsgsiM1tPJlQCtJfcBNFww5VobqBKGDyMLwOLH5rOeXXE",
    access_token_key: "1187230048115281920-uvyNMo2V4DspH2WWVyJJ8Npghols4M",
    access_token_secret: "CJNewNoj50xLxj7nGdZ39tFMkt1sGGNIDKXgTQLDmzUvi"
})



function twit(content) {
    client.post('statuses/update', content, function (error, tweet, response) {
        if (!error) {
            console.log(tweet);
        } else {
            console.log('error');
        }
    });
}

let count = 0;
setInterval(() => {
    count++;
    const status = { status: `Hello World${count}` }
    twit(status);
}, 1000 * 60 * 60)
