"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const user = {
    email: 'sac2@ecosempre.com',
    password: ''
};
(0, globals_1.describe)("POST /authenticate", () => {
    (0, globals_1.it)("it should  returns status 400 and text", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .post("/authentication")
            .send(user);
        (0, globals_1.expect)(res.status).toBe(400);
    }));
    (0, globals_1.it)("it should returns  200", () => __awaiter(void 0, void 0, void 0, function* () {
        user.email = "sac10@ecosempre.com";
        user.password = "YzuUG6kWt.";
        const res = yield (0, supertest_1.default)(server_1.default)
            .post("/authentication")
            .send(user);
        (0, globals_1.expect)(res.status).toBe(200);
    }));
});
