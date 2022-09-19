import { Application, Request, Response, Router } from "express";


// const resister = (app: Application): void => {
//     app.get("/", (req: Request, res: Response): void => {
//         res.render("index");
//     });
//     app.get("/about", (req: Request, res: Response): void => {
//         res.render("about");
//     });
// };

const router = Router();

router.get("/", (req: Request, res: Response): void => {
        res.render("index");
});
router.get("/about", (req: Request, res: Response): void => {
    res.render("about");
});
router.get("/contact", (req: Request, res: Response): void => {
    res.send("Contact page");
});

export default router;

