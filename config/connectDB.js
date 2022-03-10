//require mongoose
const mongoose = require("mongoose");
//connectdataBase
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Database connected");
    } catch (error) {
        console.log("failed to connect");
    }
};
module.exports = connectDB;
