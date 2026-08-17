const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], // Fixed: changed 'require' to 'required'
         unique: true,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'] // Fixed
    },
    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy'],
        required: [true, 'Taste is required'] // Fixed
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredient: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
});

const MenuItem = mongoose.model('MenuItem',MenuItemSchema)

module.exports = MenuItem