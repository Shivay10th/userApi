/** @format */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
	},
	name: String,
	password: String,
});

module.exports = mongoose.model('user', userSchema);
