const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const  authorSchema = new Schema({
    name : {
        type: String
    },
    age : {
        type: Number
    },
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: 'books'
        }

    ]
});

module.exports = mongoose.model('authors',authorSchema);