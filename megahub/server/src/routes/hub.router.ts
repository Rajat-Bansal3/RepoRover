import {
  Router,
  type NextFunction,
  type Response,
  type Request,
} from "express";
import catchAsync from "src/lib/utils";

const router: Router = Router();

router.get(
  "/test",
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {})
);
router.get(
  "/my-repo",
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {})
);

export default router;
