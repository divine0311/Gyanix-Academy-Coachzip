import { Router, type IRouter } from "express";
import healthRouter from "./health";
import enquiryRouter from "./enquiry";
import chatRouter from "./chat";

const router: IRouter = Router();

router.use(healthRouter);
router.use(enquiryRouter);
router.use(chatRouter);

export default router;
