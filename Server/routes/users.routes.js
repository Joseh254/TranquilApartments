import {Router} from 'express';
import { validateInformation } from '../middleware/users.middleware.js';
import { createUser ,loginUser} from '../controllers/users.controllers.js';
import jwt from 'jsonwebtoken';

const payload = { password: '1' };
const secret = 'your_secret_key'; 

const token = jwt.sign(payload, secret);
console.log(token);


const routerr=Router();



routerr.post("/register", validateInformation,createUser)
routerr.post("/Signup",loginUser)
export default routerr