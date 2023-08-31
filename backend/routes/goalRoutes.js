const express = require("express");
const router = express.Router();
const {getGoals, setGoals, updateGoals, deleteGoals} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");
// GOALS ROUTES
// CHAINING METHODS THAT HAVE THE SAME ROUTE TO MAKE CODE EVEN SHORTER/MORE SUCCINCT
// router.get("/", getGoals);
// router.post("/", setGoals);
router.route("/").get(protect, getGoals).post(protect, setGoals);

// CHAINING METHODS THAT HAVE THE SAME ROUTE TO MAKE CODE EVEN SHORTER/MORE SUCCINCT
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);
router.route("/:id").delete(protect, deleteGoals).put(protect, updateGoals);




module.exports = router;
