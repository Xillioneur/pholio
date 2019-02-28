const express = require('express');
const router = express.Router();

// create a route for default endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the server-side',
  });
});

router.post('/', (req, res) => {
  res.json({
    message: 'A POST request was made to the server',
  });
});

module.exports = router;
