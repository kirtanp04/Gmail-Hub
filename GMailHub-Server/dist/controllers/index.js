"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const getHome = (req, res) => {
    res.json({ message: "Hello from TypeScript Express with root imports!" });
};
exports.getHome = getHome;
