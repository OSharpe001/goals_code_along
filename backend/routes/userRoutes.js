const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe, } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// USER ROUTES--
// CHAINING METHODS THAT HAVE THE SAME ROUTE TO MAKE CODE EVEN SHORTER/MORE SUCCINCT
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);


module.exports = router;
