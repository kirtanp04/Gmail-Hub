"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserSuccessObj = exports.GetUserErrorObj = exports.UserResponse = exports.ProjectResponse = void 0;
const HttpStatusCodes_1 = require("../../../GMailHub-Server/src/common/HttpStatusCodes");
class ProjectResponse {
    constructor() {
        this.data = '';
        this.error = '';
    }
}
exports.ProjectResponse = ProjectResponse;
class UserResponse {
    constructor() {
        this.statusCode = HttpStatusCodes_1.HttpStatusCodes.OK;
        this.Message = '';
        this.isError = false;
    }
}
exports.UserResponse = UserResponse;
const GetUserErrorObj = (errMess, statusCode) => {
    let _objErr = new UserResponse();
    _objErr.Message = errMess;
    _objErr.data = '';
    _objErr.isError = true;
    _objErr.statusCode = statusCode || HttpStatusCodes_1.HttpStatusCodes.BAD_REQUEST;
    return _objErr;
};
exports.GetUserErrorObj = GetUserErrorObj;
const GetUserSuccessObj = (Data, statusCode) => {
    let _objSucc = new UserResponse();
    _objSucc.Message = '';
    _objSucc.data = Data;
    _objSucc.isError = false;
    _objSucc.statusCode = statusCode || HttpStatusCodes_1.HttpStatusCodes.OK;
    return _objSucc;
};
exports.GetUserSuccessObj = GetUserSuccessObj;
