const express = require('express');

const router = express.Router();
const { Readorder } = require("../controllers/order")

router.get("/Readorder", Readorder)

module.exports = router;