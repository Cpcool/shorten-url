var url = require('../models/url');
const shortid = require('shortid');

module.exports.saveUrl = function (req, res) {
    let shortUrl = shortid.generate()
    let longUrl = req.body.url
    var entry = new url({ shortUrl, longUrl });

    entry.save(function (err) {
        if (err) {
            return res.send(err);
        }
        shortUrl = 'http://localhost:3001/api/v1/short-url/' + shortUrl
        return res.send({ shortUrl, status: 200 })
    })
};

module.exports.getLongUrl = (req, res) => {
    let shortUrl = req.params.url
    url.findOne({ shortUrl }, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            return res.redirect(docs.longUrl)
        }
    });
}

module.exports.home = (req, res) => {
    return res.send("WORKING FINE")
}