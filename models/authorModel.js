const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birth_date: Date,
    biography: String,
});

module.exports = mongoose.model('Author', authorSchema);
