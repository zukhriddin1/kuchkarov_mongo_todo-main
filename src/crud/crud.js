import { User } from '../models/User.models.js';

export class Crud {
	constructor(model) {
		this.model = model;
	}
	getAll = async (req, res) => {
		try {
			const data = await this.model.find();
			res.send(data);
		} catch (err) {
			res.send(err.message);
			console.log(err);
		}
	};
	getById = async (req, res) => {
		const id = req.params.id;
		try {
			const data = await this.model.find({ _id: id });
			res.send(data);
		} catch (err) {
			res.send(err.message);
		}
	};
	post = async (req, res) => {
		try {
			await this.model.create(req.body);
			res.send('posted');
		} catch (err) {
			res.send(err);
		}
	};
	update = async (req, res) => {
		const id = req.params.id;
		try {
			await this.model.findByIdAndUpdate({ _id: id }, req.body);
			res.send('updated');
		} catch (err) {
			res.send(err);
		}
	};
	deleteAll = async (req, res) => {
		try {
			await User.deleteMany();
			res.send('Deleted all');
		} catch (err) {
			res.send(err);
		}
	};
	delete = async (req, res) => {
		const id = req.params.id;
		try {
			await User.deleteMany({ _id: id });
			res.send('Deleted');
		} catch (err) {
			res.send(err);
		}
	};
}
