import { NextFunction, Request, Response } from "express";
import { AppError } from "@services/error.service";

export default (err: AppError, req: Request, res: Response, next: NextFunction) => {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  console.log('Error ID:::', (res as any)?.sentry)
  console.log(err)

  return res.status(500).json({
    success: false,
    message: err.message
  })
}