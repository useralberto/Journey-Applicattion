import express, {json} from 'express';
import morgan from 'morgan';


//Routing
import userRouter from './routers/user.js';
import taskRouter from './routers/task.js';

//Initializacion of Server
const server = express();

//Middlewares
server.use(morgan('dev'));
server.use(json());

//Path
server.use('/api/user', userRouter)
server.use('/api/task', taskRouter);
 
export default server;
