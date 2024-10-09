const express = require('express');
const module = require('./lib/notion');
const getArticles = module.getDatabase;
const postNewsletter = module.createPage;
const path = require('path');

const app = express();
const port = 8000;

express.use(express.urlEnconded());
express.use(path.join(__dirname, 'public'));

app.get("/", async (req, res) => {
  res.setStatus(200);
  
  const blogs = await getArticles();
  res.json(blogs);
})

app.get("/blog", async (req, res) => {
  res.setStatus(200);
  
  const blogs = await getArticles();
  res.json(blogs);
})

app.get("/blog/:id", async (req, res) => {
  res.setStatus(200);
})

app.post("/", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  
  await createPage();
  res.setStatus(201);
})

app.get("/podcast", async (req, res) => {
  
})

app.get("/podcast/:id", async (req, res) => {
  
})

app.listen(port, console.log("Server running on port: " + port))