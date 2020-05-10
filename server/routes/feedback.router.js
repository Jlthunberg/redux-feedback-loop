const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST route to add a new feedback with feeling, understanding, support, & comments.

router.post('/', (req, res) => {
    console.log(req.body);
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
    const values= [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(queryText, values)
      .then((result) => {
        //console.log(`added new feedback to DB w/ POST`, newFeedback);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`error with DB ${queryText}`, error);
        res.sendStatus(500); // server response if error
      })
  })// end POST route

  module.exports = router;
