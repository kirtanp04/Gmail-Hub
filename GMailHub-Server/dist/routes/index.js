"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Functions_1 = require("@/common/Functions");
const HttpStatusCodes_1 = require("@/common/HttpStatusCodes");
const Response_1 = require("@/common/Response");
const auth_1 = require("@/controllers/auth");
const Crypt_1 = require("@/middleware/Crypt");
const UserResponse_1 = require("@/middleware/UserResponse");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    try {
        const { callFunction } = req.query;
        console.log(callFunction);
        if (callFunction === undefined) {
            return (0, UserResponse_1.SendResponseToUser)((0, Response_1.GetUserErrorObj)("Getting params object undefine", HttpStatusCodes_1.HttpStatusCodes.BAD_GATEWAY), next);
        }
        const encryptedObj = Crypt_1.Crypt.Decryption(callFunction);
        if (encryptedObj.error !== "") {
            return (0, UserResponse_1.SendResponseToUser)((0, Response_1.GetUserErrorObj)(encryptedObj.error, HttpStatusCodes_1.HttpStatusCodes.BAD_GATEWAY), next);
        }
        const Function = encryptedObj.data;
        switch (Function) {
            case Functions_1.FunctionName.GET.auth.Login:
                const UserResponse = auth_1.Auth.UserLogin(req, res, next);
                return (0, UserResponse_1.SendResponseToUser)(UserResponse, next);
            default:
                return (0, UserResponse_1.SendResponseToUser)((0, Response_1.GetUserErrorObj)("Invalid Function Name", HttpStatusCodes_1.HttpStatusCodes.BAD_GATEWAY), next);
        }
    }
    catch (error) {
        (0, UserResponse_1.SendResponseToUser)((0, Response_1.GetUserErrorObj)(error.message, HttpStatusCodes_1.HttpStatusCodes.BAD_GATEWAY), next);
    }
});
exports.default = router;
