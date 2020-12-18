const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const landdata = require("./routes/api/land");
const userRoute =require('./routes/api/user');

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport");
// Routes

app.use("/api", landdata);
app.use('/api', userRoute);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));