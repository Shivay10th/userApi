/** @format */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user');

mongoose.connect('mongodb://localhost:27017/userapi', (err) => {
	console.log(err);
});

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Home');
});

app.use('/user', userRoute);

app.listen(3000);
