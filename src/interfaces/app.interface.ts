import { Request, Response, NextFunction } from "express";

export type TController = (req: Request, res: Response) => Response<any>

export type TMiddleware = (req: Request, res: Response, next: NextFunction) => Response<any>

export interface IError extends TMiddleware {
    err: Error
}