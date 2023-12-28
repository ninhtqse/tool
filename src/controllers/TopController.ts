import { Request, Response, NextFunction } from 'express';

export function getTop(req: Request, res: Response) {
    res.render('top/index', { title: 'Movies' });
}