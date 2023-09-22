const sendResponse = require('../utils/sendResponse')
const Book = require('../models/bookModel')

const getBooks = async (req, res) => {
    try {
        sendResponse(res, 200, "getting all books", { book: "book" })
    } catch (error) {
        sendResponse(res, 500, "Internal Server Error")
    }
}

const addBook = async (req, res) => {
    try {
        const { title, author, ISBN, description, price, quantity, publicationDate, genres, review } = req.body;

        const book = new Book({
            title,
            author,
            ISBN,
            description,
            price,
            quantity,
            publicationDate,
            genres,
            review
        })
        await book.save()

        sendResponse(res, 201, "Book Added Successfully", book)
    } catch (error) {
        console.log(error)
        sendResponse(res, 500, "Internal Server Error")
    }
}


module.exports = { getBooks, addBook }