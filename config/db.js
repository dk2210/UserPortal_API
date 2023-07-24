// mongodb+srv://pateldevang:<password>@userdata.nibmr6h.mongodb.net/
const mongoose = require("mongoose");
const connectDB = async () => {
  const connect = await mongoose.connect(
    "mongodb+srv://pateldevang:pateldevang@userdata.nibmr6h.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
module.exports = connectDB;