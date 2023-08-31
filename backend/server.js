const express = require("express");
const dotenv = require("dotenv").config();
const Port = process.env.PORT || 5010
const { errorHandler } = require("./middleware/errorMiddleware")
const app = express();
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();

app.listen(Port, () => {
    console.log(`Server started on port ${Port}.`);
});

// MIDDLEWARE
// THIS ALLOWS THE BODY OF A POST REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// USE ROUTES/GOALROUTES TO HANDLE ANY ENDPOINTS THAT END WITH /API/GOALS
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
// THIS ROUTE WAS SENT TO THE ROUTES FOLDER
// app.get("/api/goals", (req, res) => {
//     res.status(200).json({message: "Get goals"})
// });

app.use(errorHandler);