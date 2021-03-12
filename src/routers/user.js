import { Router } from "express";
const router = Router;

import {
	createTask, getTaskAll,
	getTask,deleteTask,updateTask, getTaskByUser
} from '../controller/task.controller';

router.post('/create/', createTask);
router.get('/', getTaskAll);

router.get('/get/:id', getTask);
router.delete('/delete/:id', deleteTask);
router.put('/update/:id', updateTask);

router.get('/task/user/:userid', getTaskByUser);
