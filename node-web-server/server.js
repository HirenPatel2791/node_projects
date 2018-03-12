const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials/');
//middle ware piece
//serving static directory
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: 'Hiren',
  //   likes: [
  //     'Biking',
  //     'Cities'
  //   ]
  // });
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to the website!'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
  })
});

app.get('/bad', (req, res) => {
  res.send({
    ErrorMessage: `Page can't be load!`
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
