const books = require('./book/bookRoute')

const constructorMethod = (app) => {
    app.use('/api/books', books)
}

module.exports = constructorMethod