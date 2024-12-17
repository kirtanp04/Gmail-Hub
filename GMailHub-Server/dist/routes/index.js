"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("@/controllers");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", controllers_1.getHome);
exports.default = router;
