var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema =  new Schema (
    {
        genre: {type: String},
        name: {type: String, minLength: 3, maxLength: 100, required: true},
    }
)

GenreSchema
.virtual('url')
.get(function() {
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);