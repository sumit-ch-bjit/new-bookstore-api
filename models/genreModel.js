const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    // You can add more fields as needed
});

module.exports = mongoose.model('Genre', genreSchema);
