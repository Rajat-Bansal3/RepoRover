import type { Request, Response, NextFunction } from "express";

const catchAsync = <T extends Request, U extends Response>(
  //
  fn: (req: T, res: U, next: NextFunction) => Promise<any>
) => {
  return (req: T, res: U, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default catchAsync;
