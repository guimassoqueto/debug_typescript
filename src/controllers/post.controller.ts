import { Request, Response } from "express";

type postRequestBody = {
    username: string,
    email: string
}

function get(_: Request, res: Response) {
    res.status(200).json({
        route: "getPost"
    })
}

function post(req: Request, res: Response) {
    const { username, email } = req.body as postRequestBody;
    res.status(201).json({
        status: 201,
        data: {
            username,
            email
        }
    })
}

export { get, post };