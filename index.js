const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const categories = require('./data/categories.json');


app.use(cors())

app.get('/', (req, res) => {
  res.send("Welcome to Chef's Palette server...")
})

// Send category to the SERVER
app.get('/chefs', (req, res) => {
  res.send(chefs)
})

// Send News to the SERVER
app.get('/recipes', (req, res) => {
  res.send(recipes)
})

app.get('/categories', (req, res) => {
  res.send(categories)
})

// Send News to the SERVER by id
app.get('/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id)
  const selectedNews = chefs.find(n => parseInt(n.id) === id);
  console.log(selectedNews)
  res.send(selectedNews)
})

// Send News to the SERVER by id
app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id == 0) {
    res.send(recipes)
  }
  else {
    const selectedCategory = recipes.filter(n => parseInt(n.chef_id) === id);
    res.send(selectedCategory)
  }

})

app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // if (id == 0) {
  //   res.send(recipes)
  // }
  // else {
    const selectedCategory = recipes.filter(n => parseInt(n.recipe_category) === id);
    res.send(selectedCategory)
  // }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})