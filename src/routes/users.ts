import { Application, Request, Response, Router } from "express";


const router = Router();

router.get("/", (req: Request, res: Response): void => {
        res.render("about");
});


export default router;
