import { HttpStatusCodes } from "../../../GMailHub-Server/src/common/HttpStatusCodes";

export class ProjectResponse {
    data: any = '';

    error: any = '';
}



export class UserResponse {

    data: any

    statusCode: HttpStatusCodes = HttpStatusCodes.OK

    Message: string = '';

    isError: boolean = false;
}





export const GetUserErrorObj = (errMess: string, statusCode?: number): UserResponse => {

    let _objErr = new UserResponse()
    _objErr.Message = errMess
    _objErr.data = ''
    _objErr.isError = true
    _objErr.statusCode = statusCode || HttpStatusCodes.BAD_REQUEST

    return _objErr

}

export const GetUserSuccessObj = (Data: any, statusCode?: number): UserResponse => {

    let _objSucc = new UserResponse()
    _objSucc.Message = ''
    _objSucc.data = Data
    _objSucc.isError = false
    _objSucc.statusCode = statusCode || HttpStatusCodes.OK

    return _objSucc

}