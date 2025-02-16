const express = require('express');
const User = require('../models/User');
const app = express();

//http://localhost:8081/users
app.get('/users', async (req, res) => {
    
    try {
      const users = await User.find({});
      res.status(200).send(users);
    } catch (err) {
       res.status(500).send(err);
    }
});

// Express route for inserting a user
app.post('/insert', async (req, res) => {
    try {
      const user = new User(req.body);
      user.save();
      res.status(201).send(user);        
    } catch (err) {
        res.status(400).send(err)
    }
});

module.exports = app;


const testObj = 
{
    "name": "John Doe",
    "username": "johndoe",
    "email": "john.doe@example.com",
    "address": {
      "street": "123 Main St",
      "suite": "Apt. 101",
      "city": "Toronto",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "40.7128",
        "lng": "-74.0060"
      }
    },
    "phone": "1-123-456-7890",
    "website": "https://johndoe.com",
    "company": {
      "name": "Doe Inc.",
      "catchPhrase": "Innovating the Future",
      "bs": "Leading industry standards"
    }
}
  