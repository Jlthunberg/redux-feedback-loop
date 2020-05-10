const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST route to add a new feedback with feeling, understanding, support, & comments.

router.post('/', (req, res) => {
    const newFeedback = req.body;
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments) 
        VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
      .then((result) => {
        //console.log(`added new feedback to database`, newFeedback);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`error with DB ${queryText}`, error);
        res.sendStatus(500); // Good server always responds
      })
  })// end POST route

  module.exports = router;
