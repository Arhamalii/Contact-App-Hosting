const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");
const contactRoute = require("./routes/contactRoute");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
// connectDB
connectDB();

const app = express();

app.use(express.static(path.resolve(__dirname, "./client/dist")));

// middlewares
app.use(express.json({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/auth", authRoute);
app.use("/api/contacts", contactRoute);

// home route
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist/index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
