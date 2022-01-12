var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* READ */
router.get('/', async function (req, res) {
  let data;
  try {
    const results = await db.query('SELECT * FROM message ORDER BY id');
    console.log('results', results);
    data = results.rows;
    console.log('data', JSON.stringify(data));
    // res.json(data);
    res.render('message/index', { data });
  } catch (err) {
    console.log('Errors on getting message!');
    res.render('message', { data: '' });
  }
});

/* DELETE */
router.get('/delete/:id', async (req, res) => {
  try {
    console.log('id', req.params.id);
    const query = {
      text: `DELETE FROM message WHERE id = $1;`,
      values: [req.params.id],
    };
    const results = await db.query(query);
    res.redirect('/message');
  } catch (err) {
    console.log(err);
  }
});

/* ADD FORM */
router.get('/add', async (req, res) => {
  res.render('message/add');
});

/* ADD POST (CREATE) */
router.post('/add', async (req, res) => {
  try {
    console.log('id', req.body.id);
    console.log('name', req.body.name);
    console.log('message', req.body.message);
    const query = {
      text: `INSERT INTO message (id, name, message) VALUES ($1, $2, $3)`,
      values: [req.body.id, req.body.name, req.body.message],
    };
    const results = await db.query(query);
    res.redirect('/message');
  } catch (err) {
    console.log('Errors on getting message!', err);
    res.render('message', { data: '' });
  }
});

/* EDIT FORM */
router.get('/edit/:id', async (req, res) => {
  let data;
  try {
    console.log('id', req.params.id);
    const query = {
      text: `SELECT * FROM message WHERE id = $1;`,
      values: [req.params.id],
    };
    const results = await db.query(query);
    data = results.rows;
    console.log('data', JSON.stringify(data));
    // res.json(data);
    res.render('message/edit', { data });
  } catch (err) {
    console.log('Errors on getting message!');
    res.render('message', { data: '' });
  }
});

/* POST UPDATE */
router.post('/update', async (req, res) => {
  try {
    console.log('id', req.body.id);
    console.log('name', req.body.name);
    console.log('message', req.body.message);
    const query = {
      text: `UPDATE message SET name = $2, message = $3 WHERE id = $1;`,
      values: [req.body.id, req.body.name, req.body.message],
    };
    const results = await db.query(query);
    res.redirect('/message');
  } catch (err) {
    console.log('Errors on getting message!');
    res.render('message', { data: '' });
  }
});

module.exports = router;
