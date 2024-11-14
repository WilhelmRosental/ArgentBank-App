const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const DATABASE_URL =
      process.env.DATABASE_URL || "mongodb://mongodb:27017/argentbank";

    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database successfully connected on: ", DATABASE_URL);
  } catch (error) {
    console.error("Database Connectivity Error:", error);
    throw new Error(error);
  }
};
