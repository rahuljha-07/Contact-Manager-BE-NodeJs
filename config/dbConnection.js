const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            "Database connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDb;
