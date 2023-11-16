const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connectDB() {

    try {
        if (!mongoose.connections[0].readyState) {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('Connected to MongoDB')
        }
        else {
            console.log('Already Connected to MongoDB')
        }
    } catch (error) {
        console.log(error)
        console.log('Failed to connect to MongoDB')
    }

}

module.exports = connectDB