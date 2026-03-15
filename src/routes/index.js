function route(app){

// định nghĩa route xử lý GET /
app.get('/', (req, res) => {
  const products =[
    { id: 1, name: 'Giày thể thao', price: 100 },
    { id: 2, name: 'Giày da', price: 150 },
    { id: 3, name: 'Giày cao gót', price: 120 } 
  ]

  const data={
    title:"Website giày",
    message:"wellcome to website"
  }

  res.render('home', {
    data,
    products
  }); // render file home.handlebars
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
