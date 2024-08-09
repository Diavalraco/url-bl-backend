const express = require('express');

const { handleUserSignup } = require("../controllers/user"); // Assuming handleUserSignup is a function

const router = express.Router();

router.post('/', (req, res) => {
  // Call the handleUserSignup function and pass the request and response objects
  handleUserSignup(req, res);
});

module.exports = router;
