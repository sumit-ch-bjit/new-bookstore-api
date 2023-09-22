const express = require("express")
const router = express.Router()
const { getBooks, addBook } = require("../../controllers/bookController")
const handleValidationErrorsMiddleware = require('../../middlewares/validationErrorHandler')
const bookValidationRules = require('../../middlewares/bookValidator')

router.get("/", getBooks)
router.post("/", bookValidationRules(), handleValidationErrorsMiddleware, addBook)

module.exports = router