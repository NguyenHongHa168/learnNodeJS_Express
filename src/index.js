const path = require('path');      // import path module
const express = require('express');  // import express
const morgan = require('morgan');    // import morgan
const app = express();               // tạo app Express
const { engine } = require('express-handlebars'); // import express-handlebars
const PORT = 3000;
const route = require('./routes');
const db = require('./config/db');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');  
const { title } = require('process');

// connect db
// db.connect();

mongoose.connect('mongodb://localhost:27017/learn_nodeJS_dev')
  .then(() => console.log('Connected!'))
  .catch(err => console.log('Connection failed: ' + err.message));


// app.set('view engine', 'ejs'); 
// app.set('views','./views');

app.use(express.static(path.join(__dirname, 'public'))); // thiết lập thư mục static
app.use(bodyParser.json()); // sử dụng body-parser để parse JSON request body
app.use(bodyParser.urlencoded({ extended: true })); // sử dụng body-parser để parse URL-encoded request body  
 


app.use(morgan('combined')); // sử dụng morgan để log các request
app.engine('.hbs', engine({extname: '.hbs'})); // cấu hình engine handlebars
app.set('view engine', 'hbs'); // đặt view engine là handlebars
app.set("views", path.join(__dirname, "resources", "views")); // thiết lập thư mục view

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route init
route(app);

app.get('/detail', (req, res) => {
   const data ={
    title: 'Detail Page',
    message: 'Test message for detail page'
  }
  res.render('detail', data ); 
});

app.get('/search', (req, res) => {
  res.render('search'); // render file home.handlebars
});

app.post('/search', (req, res) => {
  res.render('search'); // render file home.handlebars
});





app.get('/detail/:id', (req, res) => {
   const id = req.params.id;
  res.json(`Detail of item with id: ${id}`);
});
app.get('/detail/course', (req, res) =>{
  res.json(req.query); 
})


app.post('/create', (req, res) => {
  const body = req.body;
  res.json(body);
});

app.put('/update', (req, res) => {
  res.json('Update success!');
});

app.delete('/delete', (req, res) => {
  res.json('Delete success!');
});



// chọn port chạy server

// khởi động server
app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});




/
