import {
	Router,
	type NextFunction,
	type Request,
	type Response,
} from "express";
import catchAsync from "src/lib/utils";

const router: Router = Router();

router.post(
	"/test",
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		res.send("hehe");
	}),
);
router.post(
	"/signup",
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {}),
);
router.post(
	"/signin",
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {}),
);
router.post(
	"/me",
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {}),
);

export default router;
