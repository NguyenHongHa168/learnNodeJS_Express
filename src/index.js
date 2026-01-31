const path = require('path');      // import path module
const express = require('express');  // import express
const morgan = require('morgan');    // import morgan
const app = express();               // tạo app Express
const { engine } = require('express-handlebars'); // import express-handlebars
const PORT = 3000;
const route = require('./routes');
const db = require('./config/db');

const mongoose = require('mongoose');

// connect db
// db.connect();

mongoose.connect('mongodb://localhost:27017/learn_nodeJS_dev')
  .then(() => console.log('Connected!'))
  .catch(err => console.log('Connection failed: ' + err.message));

app.use(express.static(path.join(__dirname, 'public'))); // thiết lập thư mục static


app.use(morgan('combined')); // sử dụng morgan để log các request
app.engine('.hbs', engine({extname: '.hbs'})); // cấu hình engine handlebars
app.set('view engine', 'hbs'); // đặt view engine là handlebars
app.set("views", path.join(__dirname, "resources", "views")); // thiết lập thư mục view

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// route init
route(app);


// chọn port chạy server

// khởi động server
app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
