import express, {json} from 'express';
import morgan from 'morgan';


//Routing
import userRouter from './routers/user';
import taskRouter from './routers/task';

//Initializacion of Server
const server = express();

//Middlewares
server.use('dev');
server.use(json());

//Path
server.use('/api/user', userRouter)
server.user('/api/task', taskRouter);


export default server;
