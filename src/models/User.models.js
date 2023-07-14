/** @format */

import mongoose, { Schema, mongo } from 'mongoose';
import { todoSchema } from './Todos.models.js';

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	todos: [todoSchema],
	spouse: String,
	address: String,
});

export const User = mongoose.model('user', userSchema);
