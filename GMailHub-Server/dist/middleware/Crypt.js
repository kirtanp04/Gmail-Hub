"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crypt = void 0;
exports.isTypeString = isTypeString;
const CryptoTS = __importStar(require("crypto-ts"));
const Convert_1 = require("@/common/Convert");
const Response_1 = require("@/common/Response");
class Crypt {
    static Decryption(value) {
        let _res = new Response_1.ProjectResponse();
        try {
            const encryptedString = atob(value);
            const decrypted = CryptoTS.AES.decrypt(encryptedString, Crypt.key, {
                iv: Crypt.Iv,
                mode: CryptoTS.mode.CBC,
                padding: CryptoTS.pad.PKCS7,
            });
            const decryptedData = decrypted.toString(CryptoTS.enc.Utf8);
            if (decryptedData) {
                const parseObj = Convert_1.Convert.toParse(decryptedData);
                if (parseObj.error === '') {
                    _res.data = parseObj.data;
                }
                else {
                    _res.error = parseObj.error;
                }
            }
            else {
                _res.error = 'Not able to decrypt the data';
            }
        }
        catch (error) {
            _res.error = error.message;
        }
        finally {
            return _res;
        }
    }
    static Encryption(value) {
        let _res = new Response_1.ProjectResponse();
        try {
            const objString = Convert_1.Convert.toString(value);
            if (objString.error === '') {
                const utf8String = CryptoTS.enc.Utf8.parse(objString.data);
                const encrypted = CryptoTS.AES.encrypt(utf8String, Crypt.key, {
                    iv: Crypt.Iv,
                    mode: CryptoTS.mode.CBC,
                    padding: CryptoTS.pad.PKCS7,
                });
                const encryptedData = btoa(encrypted.toString());
                if (encryptedData) {
                    _res.data = encryptedData;
                }
                else {
                    _res.error = 'Not able to encrypt the data';
                }
            }
            else {
                _res.error = objString.error;
            }
        }
        catch (error) {
            _res.error = error.message;
        }
        finally {
            return _res;
        }
    }
}
exports.Crypt = Crypt;
Crypt.key = CryptoTS.enc.Utf8.parse(process.env.CRYPTO_ENCRYPTION_KEY);
Crypt.Iv = CryptoTS.enc.Utf8.parse(process.env.CRYPTO_IV);
function isTypeString(value) {
    if (typeof value === 'string') {
        return true;
    }
    else {
        return false;
    }
}
