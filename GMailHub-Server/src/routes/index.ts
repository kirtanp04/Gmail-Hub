import { FunctionName } from "@/common/Functions";
import { HttpStatusCodes } from "@/common/HttpStatusCodes";
import { GetUserErrorObj } from "@/common/Response";
import { Auth } from "@/controllers/auth";
import { Crypt } from "@/middleware/Crypt";
import { SendResponseToUser } from "@/middleware/UserResponse";
import { NextFunction, Request, Response, Router } from "express";


const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {

        const { callFunction } = req.query

        console.log(callFunction)

        if (callFunction === undefined) {
            return SendResponseToUser(GetUserErrorObj("Getting params object undefine", HttpStatusCodes.BAD_GATEWAY), next)
        }

        const encryptedObj = Crypt.Decryption(callFunction as string)

        if (encryptedObj.error !== "") {
            return SendResponseToUser(GetUserErrorObj(encryptedObj.error, HttpStatusCodes.BAD_GATEWAY), next)
        }

        const Function: string = encryptedObj.data

        switch (Function) {
            case FunctionName.GET.auth.Login:

                const UserResponse = Auth.UserLogin(req, res, next)

                return SendResponseToUser(UserResponse, next)

            default:
                return SendResponseToUser(GetUserErrorObj("Invalid Function Name", HttpStatusCodes.BAD_GATEWAY), next)
        }

    } catch (error) {

        SendResponseToUser(GetUserErrorObj(error.message, HttpStatusCodes.BAD_GATEWAY), next)
    }
});

export default router;
