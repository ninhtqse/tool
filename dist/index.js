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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.js
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path = __importStar(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const web_1 = __importDefault(require("./routes/web"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Allow CORS
app.use((0, cors_1.default)());
// Sets up the view engine
app.set('view engine', 'tsx');
app.engine('tsx', require('express-react-views').createEngine());
//forms
app.set('views', path.join(__dirname, 'views'));
//public 
app.use(express_1.default.static(path.join(__dirname, 'public')));
// Parses JSON in body
app.use(express_1.default.json());
// Handles / routes
app.use('/', (0, cors_1.default)(), web_1.default);
//Starts the app on the configured port, then calls the callback when
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
