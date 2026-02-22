const Expert = require("../models/Expert");

/* ===============================
   GET ALL EXPERTS
================================*/
const getExperts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;

    const filter = {};

    // search by name
    if (req.query.search) {
      filter.name = {
        $regex: req.query.search,
        $options: "i",
      };
    }

    // filter by category
    if (req.query.category) {
      filter.category = req.query.category;
    }

    const experts = await Expert.find(filter)
      .skip(skip)
      .limit(limit);

    res.json(experts);
  } catch (error) {
    console.error("GET EXPERTS ERROR:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

/* ===============================
   GET SINGLE EXPERT
================================*/
const getExpertById = async (req, res) => {
  try {
    const expert = await Expert.findById(req.params.id);

    if (!expert) {
      return res.status(404).json({ message: "Expert not found" });
    }

    res.json(expert);
  } catch (error) {
    console.error("GET EXPERT ERROR:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getExperts,
  getExpertById,
};