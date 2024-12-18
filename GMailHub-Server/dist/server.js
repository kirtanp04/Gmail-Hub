"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const dotenv_1 = __importDefault(require("dotenv"));
const os_1 = __importDefault(require("os"));
const ExpressServer_1 = require("./ExpressServer");
const _CpuLength = os_1.default.availableParallelism();
const cluster = cluster_1.default;
if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
    for (let i = 0; i < _CpuLength; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
    cluster.on('disconnect', (worker) => {
        cluster.fork(); // Fork a new worker on disconnect
    });
}
else {
    dotenv_1.default.config();
    const _Server = new ExpressServer_1.Express();
    _Server.port = 8080;
    _Server.listen();
}
