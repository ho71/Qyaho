const express = require("express");
const router = express.Router();
const Cus_num = require("../models/customer_num");

router.get("/cus_nums", async (req, res) => {
  const customer = await Cus_num.find();
  try {
  } catch (error) {}
  res.json(customer);
});

module.exports = router;
