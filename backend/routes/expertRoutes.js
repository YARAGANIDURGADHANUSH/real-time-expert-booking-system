const express = require("express");
const router = express.Router();

const {
  getExperts,
  getExpertById,
} = require("../controllers/expertController");

/* GET all experts */
router.get("/experts", getExperts);

/* GET single expert */
router.get("/experts/:id", getExpertById);

module.exports = router;