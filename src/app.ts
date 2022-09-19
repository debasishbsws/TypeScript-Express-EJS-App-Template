import dotenv from "dotenv";
import express, {Application, Request, Response} from "express";
import path from "path";
import router from './routes/route';

dotenv.config();
const port = process.env.SERVER_PORT;
const app: Application = express();

app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// 