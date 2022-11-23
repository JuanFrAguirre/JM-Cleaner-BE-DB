"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stores_routes_1 = __importDefault(require("./stores.routes"));
const products_routes_1 = __importDefault(require("./products.routes"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send('<h1>JM-Cleaner DataBase</h1>');
});
router.use('/stores', stores_routes_1.default);
router.use('/products', products_routes_1.default);
exports.default = router;
