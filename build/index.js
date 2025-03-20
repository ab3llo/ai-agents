"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
function main() {
    const anthropic = new sdk_1.default({ apiKey: process.env.ANTHROPIC_API_KEY });
}
