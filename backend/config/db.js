const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected:${conn.connection.host}`);
        // console.log(`MongoDB connected:${conn.connec.name}`)
    } catch (err) {
        console.log(err);
        process.exit(1);
    };
};

module.exports = connectDB;