// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create connection
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3308,
  database: 'nodejs'
});

// Connect
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(bodyParser.json());

// Get all comments
app.get('/api/comments', (req, res) => {
  connection.query('SELECT * FROM comments', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

// Get comment by id
app.get('/api/comments/:id', (req, res) => {
  connection.query('SELECT * FROM comments WHERE id = ?', [req.params.id], (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

// Create comment
app.post('/api/comments', (req, res) => {
  connection.query('INSERT INTO comments SET ?', [req.body], (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

// Update comment
app.put('/api/comments/:id', (req, res) => {
  connection.query('UPDATE comments SET ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

// Delete comment
app.delete('/api/comments/:id', (req, res) => {
  connection.query('DELETE FROM comments WHERE id = ?', [req.params.id], (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
