import dotenv from "dotenv";
dotenv.config();
import express, {Application, Request, Response, urlencoded, NextFunction} from "express";
import path from "path";

import indexRouter from './routes/index';
import usersRouter from './routes/index';

const PORT = process.env.SERVER_PORT;
const app: Application = express();

// app.use(express.json());
//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//serve static files 
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use('/users', usersRouter);

//catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    // next(createError(404));
});

//error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});


