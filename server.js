const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(morgan("dev"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/starWars';
mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected!!"))
    .catch(err => console.log(err))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
