const mongoose = require('mongoose');

const MongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

module.exports = MongoConnect;
