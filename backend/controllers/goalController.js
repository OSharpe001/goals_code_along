const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// @desc        Get goals
// @route       GET /api/goals
// @access      Private
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals);
    // res.status(200).json({ message: "Get goals" });
});

// @desc        Set goals
// @route       POST /api/goals
// @access      Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field");
    };
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    // console.log(req.body.text);
    res.status(200).json(goal);
});

// @desc        Update goals
// @route       PUT /api/goals/:id
// @access      Private
const updateGoals = asyncHandler(async(req, res) => {
    // FIND THE ID
    const goal = await Goal.findById(req.params.id)

    // CHECK IF THE GOAL EXISTS
    if (!goal) {
        res.status(400)
        throw new Error("Goal not found")
    };

    // FIRST, GET THE PARTICULAR USER
    const user = await User.findById(req.user.id);

    // CHECK FOR THE USER
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    };

    // MAKE SURE THE LOGGED IN USER MATCHES THE GOAL'S USER
    if (goal.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    };

    // FINDING THE GOAL AND CREATING IF IT DOESN'T EXIST
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedGoal);
    // res.status(200).json({message: `Update goal ${req.params.id}`});
});

// @desc        Get goals
// @route       DELETE /api/goals/:id
// @access      Private
const deleteGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error("Goal not found")
    };

    // FIRST, GET THE PARTICULAR USER
    const user = await User.findById(req.user.id);

    // CHECK FOR THE USER
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    };

    // MAKE SURE THE LOGGED IN USER MATCHES THE GOAL'S USER
    if (goal.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    };

    await Goal.findByIdAndRemove(req.params.id);

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
};