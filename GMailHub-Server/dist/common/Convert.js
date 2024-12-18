"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
exports.isTypeString = isTypeString;
const Response_1 = require("./Response");
// import { ProjectResponse } from "./Response";
class Convert {
}
exports.Convert = Convert;
Convert.toString = (value) => {
    let _res = new Response_1.ProjectResponse();
    try {
        let StringData = new Response_1.ProjectResponse();
        if (isTypeString(value)) {
            StringData.data = value;
        }
        else {
            StringData.data = JSON.stringify(value);
        }
        if (StringData) {
            _res.data = StringData.data;
        }
        else {
            _res.error = ' Error While Converting to String';
        }
    }
    catch (error) {
        _res.error = error.message;
    }
    finally {
        return _res;
    }
};
Convert.toParse = (value) => {
    let _res = new Response_1.ProjectResponse();
    try {
        const parseData = JSON.parse(value);
        if (parseData) {
            _res.data = parseData;
        }
        else {
            _res.error = ' Not able to Parse Value';
        }
    }
    catch (error) {
        _res.error = error.message;
    }
    finally {
        return _res;
    }
};
function isTypeString(value) {
    if (typeof value === 'string') {
        return true;
    }
    else {
        return false;
    }
}
