const express = require('express');
const module = require('./lib/notion');
const getArticles = module.getDatabase;
const path = require('path');

const app = express();
const port = 8000;

express.use(path.join(__dirname, 'public'));

app.get("/", async (req, res) => {
  res.setStatus(200);
})

app.get("/blog", async (req, res) => {
  res.setStatus(200);
})

app.get("/blog/:id", async (req, res) => {
  res.setStatus(200);
})

app.post("/", async (req, res) => {
  
})

app.get("/podcast", async (req, res) => {
  
})

app.get("/podcast/:id", async (req, res) => {
  
})

app.listen(port, console.log("Server running on port: " + port))