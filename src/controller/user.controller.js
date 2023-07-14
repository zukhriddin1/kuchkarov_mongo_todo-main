import { Crud } from '../crud/crud.js';
import { User } from '../models/User.models.js';

class UserCrud extends Crud {}

export const crud = new UserCrud(User);
