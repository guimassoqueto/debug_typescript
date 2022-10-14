import express, { Express } from "express";
import { PORT } from "./envs";
import postRoute from "./routes/post.route";

const app: Express = express();
app.use(express.json());

app.use("/post", postRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})