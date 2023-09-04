const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
// const Port = process.env.PORT || 5010;
const Port = process.env.PORT;
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();

app.listen(Port, () => {
    console.log(`Server started on port ${Port}.`);
});

// MIDDLEWARE--
// THIS ALLOWS THE BODY OF A POST REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// USE ROUTES/GOALROUTES TO HANDLE ANY ENDPOINTS THAT END WITH /API/GOALS
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// SERVE FRONTEND
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.get("*", (req,res) => res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html")));
} else {
    app.get("/", (req, res) => res.send("Please set to production"));
};


app.use(errorHandler);