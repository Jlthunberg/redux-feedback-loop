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

  router.get('/admin', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY id ASC;`;
    pool.query(sqlText)
      .then((result) => {
        //console.log(`Got feedback:`, result);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      })
  })

  module.exports = router;
