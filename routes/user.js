/** @format */

const router = require('express').Router();
const User = require('../models/user');
router.post('/create', (req, res) => {
	console.log(req.body);
	User.create(req.body, (err, data) => {
		if (err) {
			console.log(err);
			return res.json({ msg: 'failed to save the data' });
		}
		res.json(data);
		console.log(data);
	});
});

router.get('/:userId', (req, res) => {
	const id = req.params.userId;
	User.findById(id, (err, user) => {
		if (err) {
			return res.json({
				err: "User doesn't exist",
			});
		} else {
			return res.status(200).json(user);
		}
	});
});

router.put('/:userId', (req, res) => {
	const id = req.params.userId;
	const { name, username } = req.body;
	User.findByIdAndUpdate(id, { name, username }, (err, user) => {
		if (err) {
			console.log(err);
			return res.json({ err: 'Failed to update the data' });
		} else {
			return res.status(200).json({ msg: 'updated' });
		}
	});
});

router.delete('/:userId', (req, res) => {
	const id = req.params.userId;
	User.findByIdAndDelete(id, (err, user) => {
		if (err) {
			return res.json({
				err: 'failed to delete',
			});
		} else {
			return res.status(200).json({
				msg: 'Deleted',
			});
		}
	});
	return res.json({
		err: 'Something went wrong',
	});
});

module.exports = router;
