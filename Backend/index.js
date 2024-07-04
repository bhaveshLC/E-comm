const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes/user');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const port = 3001;
const app = express();
const session = require('express-session');
app.use(cors());
app.use(express.json());

require('dotenv').config()
app.use(cookieParser());
const url = 'mongodb://localhost:27017/Ecomm';
app.use(express.json());
mongoose.connect(url)
.then(()=> console.log('Db Connected Successfully'))
.catch((err)=> console.log(err))
app.use('/api/user',router)
app.listen(port, ()=>{
    console.log(`Server Started at ${port}`);
})