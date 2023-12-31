const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// const Headers = {
//     "Access-Control-Allow-Headers": "*",
//     "Access-Control-Allow-Methods": "*",
//     "Access-Control-Allow-Origin": "*"
// };

// @desc        Register new user
// @route       POST /api/users
// @access      Private
const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields");
    };

    // CHECK IF USER EXISTS
    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    };

    // HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // CREATE USER
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    };
});

// @desc        Authenticate a user
// @route       POST /api/users/login
// @access      Private
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    // CHECK FOR USER EMAIL
    const user = await User.findOne({email});

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    };
});

// @desc        Get user data
// @route       GET /api/users/me
// @access      Private
const getMe = asyncHandler(async(req, res) => {
    res.status(200).json(req.user);
});

// GENERATE JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = { registerUser, loginUser, getMe, };