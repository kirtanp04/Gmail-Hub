"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Express = exports._app = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const UserResponse_1 = require("./middleware/UserResponse");
const routes_1 = __importDefault(require("./routes"));
const Response_1 = require("./common/Response");
exports._app = (0, express_1.default)();
class Express {
    constructor() {
        this.middleware();
        this.route();
    }
    middleware() {
        exports._app.use((0, cors_1.default)({
            credentials: true,
            methods: 'GET,POST',
            optionsSuccessStatus: 201,
            origin: [process.env.FRONTEND_URL],
        }));
        exports._app.use((0, helmet_1.default)());
        exports._app.use(body_parser_1.default.json({ limit: '50mb' }));
        exports._app.use(body_parser_1.default.urlencoded({ extended: true, limit: '50mb', parameterLimit: 2 }));
        exports._app.use(express_1.default.json({ limit: '50mb' }));
        exports._app.use((0, cookie_parser_1.default)());
        exports._app.use(body_parser_1.default.raw({ type: 'application/json' }));
    }
    route() {
        exports._app.use('/GMailHub/api', routes_1.default);
        exports._app.all('*', (req, res, next) => {
            let objUserResponse = new Response_1.UserResponse();
            objUserResponse.Message = 'API error / Path not found.';
            objUserResponse.isError = true;
            objUserResponse.statusCode = 404;
            (0, UserResponse_1.SendResponseToUser)(objUserResponse, next);
        });
        exports._app.use(UserResponse_1.UserResponseMiddWare); // sending data to user middle ware
    }
    listen() {
        try {
            exports._app.listen(this.port, () => {
                console.log('Server started on Port' + this.port);
            });
        }
        catch (error) {
            console.log('Error while Starting Server -> ' + error);
        }
    }
}
exports.Express = Express;
