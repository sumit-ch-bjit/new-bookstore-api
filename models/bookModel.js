const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    ISBN: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    publicationDate: Date,

    genres: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
    }],

    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

module.exports = mongoose.model('Book', bookSchema);
