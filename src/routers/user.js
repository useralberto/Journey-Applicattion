import { Router as expressRouter } from 'express';

const router = expressRouter();

//Import of actions from each url.
import {
	createUser, getUserAll, getUser, 
	deleteUser, updateUser 
} from "../controller/user.controller.js";

router.post('/create/', createUser);
router.get('/', getUserAll);

router.get('/get/:id', getUser);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);

export default router;
