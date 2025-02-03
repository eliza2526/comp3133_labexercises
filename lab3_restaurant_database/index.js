const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://elizabeththomas2:l6r255g3nWFaQ3VB@cluster0.u4oyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

// Use Routes
const restaurants = require('./routes/api/restaurants');
app.use('/api/restaurants', restaurants);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});