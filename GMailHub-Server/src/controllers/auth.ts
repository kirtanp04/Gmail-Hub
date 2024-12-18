import { HttpStatusCodes } from "@/common/HttpStatusCodes";
import { GetUserErrorObj, GetUserSuccessObj, UserResponse } from "@/common/Response";
import { GMail } from "@/Service/GMail";
import { NextFunction, Request, Response } from "express";

export class Auth {
    public static UserLogin = (req: Request, res: Response, next: NextFunction): UserResponse => {
        try {
            const url = GMail.generateAuthUrl();
            console.log(url)
            res.redirect(url)
            return GetUserSuccessObj(url, HttpStatusCodes.BAD_GATEWAY)
        } catch (error) {
            return GetUserErrorObj(error.message, HttpStatusCodes.BAD_GATEWAY)
        }
    }
}