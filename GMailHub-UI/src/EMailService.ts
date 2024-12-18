import { API } from "./common/APICall"
import { FunctionName } from "./Constant"

export class EMail {
    static UserLogin = async (onSuccess: (res: any) => void, onFail: (err: any) => void) => {
        await API.GET(FunctionName.GET.auth.Login, (res) => {
            onSuccess(res)
        }, (err) => {
            onFail(err)
        })
    }
}