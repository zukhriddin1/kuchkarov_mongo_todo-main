import express from 'express';
import { crud } from '../controller/todo.controller.js';
export const TodoRotues = express.Router();
TodoRotues.get('/all', (req, res) => {
	crud.getAll(req, res);
});
TodoRotues.get('/:id', (req, res) => {
	crud.getById(req, res);
});
TodoRotues.post('/', (req, res) => {
	crud.post(req, res);
});
TodoRotues.patch('/:id', (req, res) => {
	crud.update(req, res);
});
TodoRotues.delete('/delete_all', (req, res) => {
	crud.deleteAll(req, res);
});
TodoRotues.delete('/:id', (req, res) => {
	crud.delete(req, res);
});
