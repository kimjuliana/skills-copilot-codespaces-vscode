// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create database connection
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'comments'
});
// Connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
// Create database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE comments';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Database created...');
    });
});
// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Posts table created...');
    });
});
// Create post 1
app.get('/addpost1', (req, res) => {
    let post = { title: 'Post One', body: 'This is post number one' };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Post 1 added...');
    });
});
// Create post 2
app.get('/addpost2', (req, res) => {
    let post = { title: 'Post Two', body: 'This is post number two' };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Post 2 added...');
    });
});
// Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console