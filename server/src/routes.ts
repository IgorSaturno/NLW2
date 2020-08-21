import express from 'express';
import ClassesController from './database/controllers/ClassesController';
import ConnectionsController from './database/controllers/ConnectionsController';


const routes = express.Router();
const ClassesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', ClassesControllers.index);
routes.post('/classes', ClassesControllers.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;