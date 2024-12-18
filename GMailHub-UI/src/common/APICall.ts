import axiosCall from "./axios"
import { Crypt } from "./Crypt"
import { UserResponse } from "./Response"


export class API {

    static GET = async (FunctionName: string, onSuccess: (res: any) => void, onFail: (err: any) => void) => {
        try {
            debugger
            const EncryptedObj = Crypt.Encryption(FunctionName)

            if (EncryptedObj.error !== "") {
                onFail("Client Side / " + EncryptedObj.error)
                return
            }

            const response = await axiosCall.get(`?callFunction=${EncryptedObj.data}`)

            if (response === undefined) {
                onFail("Getting response undefine")
                return
            }

            const DecryptResData = Crypt.Decryption(response.data)


            if (DecryptResData.error !== "") {
                onFail("Client Side / " + DecryptResData.error)
                return
            }

            const serverResData: UserResponse = DecryptResData.data

            if (serverResData.isError) {
                onFail(serverResData.Message)
                return
            }

            onSuccess(serverResData.data)


        } catch (error: any) {
            onFail(error.message)
        }
    }
}