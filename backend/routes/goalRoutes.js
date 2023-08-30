const express = require("express");
const router = express.Router();
const {getGoals, setGoals, updateGoals, deleteGoals} = require("../controllers/goalController");

// GOALS ROUTES
// CHAINING METHODS THAT HAVE THE SAME ROUTE TO MAKE CODE EVEN SHORTER/MORE SUCCINCT
// router.get("/", getGoals);
// router.post("/", setGoals);
router.route("/").get(getGoals).post(setGoals);

// CHAINING METHODS THAT HAVE THE SAME ROUTE TO MAKE CODE EVEN SHORTER/MORE SUCCINCT
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);




module.exports = router;
