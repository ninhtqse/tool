import { Router } from 'express';
import * as TopController from '../controllers/TopController';

// Create a new router to handle /tool routes
const toolRouter = Router();

// Ensure that POST, PUT, and PATCH methods only accept Content-Type: application/json bodies
toolRouter.use((req, res, next) => {
    if (
        ['POST', 'PUT', 'PATCH'].indexOf(req.method) !== -1 &&
        !req.is('json')
    ) {
        return res.status(415).send('Content-Type must be application/json');
    }

    return next();
});

// GET /
toolRouter.get('/', TopController.getTop);

export default toolRouter;