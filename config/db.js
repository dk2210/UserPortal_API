// mongodb+srv://pateldevang:<password>@userdata.nibmr6h.mongodb.net/
const mongoose = require("mongoose");
const connectDB = async () => {
  const connect = await mongoose.connect(
    process.env.DABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
module.exports = connectDB;