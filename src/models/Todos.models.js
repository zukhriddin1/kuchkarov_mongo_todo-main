/** @format */

import mongoose, { Schema, mongo } from 'mongoose';

export const todoSchema = new Schema({
	text: String,
	completed: Boolean,
});

export const Todos = mongoose.model('todos', todoSchema);
