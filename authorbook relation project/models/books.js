const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type : String
    },
    year:{
        type : Number
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'authors'
    }
})

module.exports = mongoose.model('books',bookSchema);