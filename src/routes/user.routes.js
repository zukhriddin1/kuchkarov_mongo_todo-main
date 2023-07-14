import express from 'express';
import { crud } from '../controller/user.controller.js';
export const UserRoutes = express.Router();

UserRoutes.get('/all', (req, res) => {
	crud.getAll(req, res);
});
UserRoutes.get('/:id', (req, res) => {
	crud.getById(req, res);
});
UserRoutes.post('/', (req, res) => {
	crud.post(req, res);
});
UserRoutes.patch('/:id', (req, res) => {
	crud.update(req, res);
});
UserRoutes.delete('/delete_all', (req, res) => {
	crud.deleteAll(req, res);
});
UserRoutes.delete('/delete/:id', (req, res) => {
	crud.delete(req, res);
});
