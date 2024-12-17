import { Request, Response } from "express";

export const getHome = (req: Request, res: Response) => {
    res.json({ message: "Hello from TypeScript Express with root imports!" });
};