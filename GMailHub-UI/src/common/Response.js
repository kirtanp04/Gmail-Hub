"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = exports.ProjectResponse = void 0;
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
