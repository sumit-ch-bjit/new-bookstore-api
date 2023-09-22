const { body } = require('express-validator');

const isValidMongoIds = (value) => {
    if (!Array.isArray(value)) {
        return false;
    }

    return value.every((id) => mongoose.Types.ObjectId.isValid(id));
};

const bookValidationRules = () => {
    return [
        body('title').trim().notEmpty().withMessage('Title is required'),
        body('author').isMongoId().withMessage('Invalid author ID'),
        body('ISBN').trim().notEmpty().withMessage('ISBN is required'),
        body('description').trim(),
        body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
        body('quantity').isInt({ min: 0 }).withMessage('Quantity must be a non-negative integer'),
        body('publicationDate').isISO8601().toDate(),
        body('genres').custom(isValidMongoIds).withMessage('Genres must be valid MongoDB ObjectIDs'),
        body('reviews').custom(isValidMongoIds).withMessage('Reviews must be valid MongoDB ObjectIDs'),
    ]
}

module.exports = bookValidationRules