const express = require('express');
const app = express();
const cors = require('cors');
const mongo = require('./db.js');
require('dotenv').config();

// Connect to MongoDB
mongo();

app.use(cors());
const port = 5000;
app.use(express.json());
// Routes
const createUserRoute = require('./Routes/CreateUser.js');
const displayDataRoute = require('./Routes/DisplayData.js');
const OrderData = require('./Routes/OrderData.js');
// Register the routes
app.use('/', createUserRoute);
app.use('/', displayDataRoute);
app.use('/', OrderData);
app.listen(port, () => {
  console.log(`Food Delivery App listening on port ${port}`);
});
