const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, 'Please provide a title'],
        trim: true,
        maxlength: [20, 'Title cannot be more than 20 characters'],
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});


module.exports = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
