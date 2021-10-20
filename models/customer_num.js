const mongoose = require("mongoose");
const config = require("../config/database");

const CusNumSchema = mongoose.Schema({
  name: {
    type: String,
  },
  birth: {
    type: String,
  },
  time: {
    type: Number,
  },
  username: {
    type: String,
  },
  no: {
    type: Number,
  }
});

module.exports = mongoose.model("Cus_num", CusNumSchema);
