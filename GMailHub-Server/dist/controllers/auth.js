"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const HttpStatusCodes_1 = require("@/common/HttpStatusCodes");
const Response_1 = require("@/common/Response");
const GMail_1 = require("@/Service/GMail");
class Auth {
}
exports.Auth = Auth;
Auth.UserLogin = (req, res, next) => {
    try {
        const url = GMail_1.GMail.generateAuthUrl();
        console.log(url);
        res.redirect(url);
        return (0, Response_1.GetUserSuccessObj)(url, HttpStatusCodes_1.HttpStatusCodes.BAD_GATEWAY);
    }
    catch (error) {
        return (0, Response_1.GetUserErrorObj)(error.message, HttpStatusCodes_1.HttpStatusCodes.BAD_GATEWAY);
    }
};
