const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], // Fixed: changed 'require' to 'required'
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Age is required'], // Fixed
        min: [18, 'Age must be at least 18']
    },
    work: {
        type: String,
        required: [true, 'Work role is required'], // Fixed
        enum: {
            values: ['chef', 'waiter', 'manager'],
            message: '{VALUE} is not a valid work role'
        },
        lowercase: true
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'], // Fixed
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'], // Fixed
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: String,
        trim: true
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required'], // Fixed
        min: [0, 'Salary cannot be negative']
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;