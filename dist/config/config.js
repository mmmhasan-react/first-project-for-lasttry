"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const process_1 = require("process");
dotenv_1.default.config({ path: path_1.default.join((0, process_1.cwd)(), '.env') });
exports.default = {
    db_url: process.env.DB_URL,
    port: process.env.PORT
};
