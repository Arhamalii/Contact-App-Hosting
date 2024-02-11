const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");
const contactRoute = require("./routes/contactRoute");
const cors = require("cors");
const morgan = require("morgan");
// connectDB
connectDB();

const app = express();

const corsOptions = {
  origin: '*',
};


// middlewares
app.use(express.json({ extended: false }));
app.use(morgan("dev"));
app.use(cors(corsOptions));

// routes
app.use("/api/auth", authRoute);
app.use("/api/contacts", contactRoute);

// home route
app.use("/", (req, res) => {
  res.send("Welcome to CMS APP");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
