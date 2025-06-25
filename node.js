//mongodb://localhost:27017/SHAN
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dburl = process.env.DBURL;
const path = require('path');
const router = require('./Routes.js');
mongoose.connect(dburl).then(() =>
console.log('server started')).catch(err => console.log('mongoose err', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './')));

app.use('/', router); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './'));

app.listen(PORT , () => console.log(`server started http://localhost:${PORT}/`));
