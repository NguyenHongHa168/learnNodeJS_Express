function route(app){

// định nghĩa route xử lý GET /
app.get('/', (req, res) => {
  res.render('home'); // render file home.handlebars
});

app.get('/news', (req, res) => {
  res.render('news'); 
});

app.get('/search', (req, res) => {
  res.render('search'); // render file home.handlebars
});

app.post('/search', (req, res) => {
  res.render('search'); // render file home.handlebars
});
}

module.exports = route;