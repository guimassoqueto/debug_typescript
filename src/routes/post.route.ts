import { Router } from "express";
import { get, post } from "../controllers/post.controller";

const route: Router = Router();

route.get("/", get);
route.post("/", post);

export default route;