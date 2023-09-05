const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const Port = process.env.PORT || 5010;
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
// USE ROUTES/USERROUTES TO HANDLE ANY ENDPOINTS THAT END WITH /API/USERS
app.use("/api/users", require("./routes/userRoutes"));

// --
// ADDING CORS PARAMETERS TO ALLOW "ACCESS-CONTROL-ALLOW-ORIGIN"
// app.use(cors({
//     origin: "https://sharpgoalsbackend.onrender.com"
// }
// ));
// app.options('*', cors());
// **IF THE ABOVE FUNCTION DOESN'T WORK, TRY THIS NEXT...
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
// ** IF EVEN THAT DOESN'T WORK, YET ANOTHER ATTEMPT CAN BE MADE WITH THIS...
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", 'http://sharpgoals.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    next();
  });
// --

// SERVE FRONTEND
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.get("*", (req,res) => res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html")));
} else {
    app.get("/", (req, res) => res.send("Please set to production"));
};


app.use(errorHandler);