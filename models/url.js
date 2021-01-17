var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
    longUrl: { type: String, required: true, max: 2048 },
    shortUrl: { type: String, required: true },
    date: { type: Date, default: Date.now }
});


// Export the model
module.exports = mongoose.model('url', urlSchema);