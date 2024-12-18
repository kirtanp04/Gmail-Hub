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


