"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stores_controller_1 = require("../controllers/stores.controller");
const router = express_1.default.Router();
router
    .get('/', stores_controller_1.storesController.getAllStores)
    .get('/:id', stores_controller_1.storesController.getStoreById)
    .get('/type/:type', stores_controller_1.storesController.getStoreByType)
    .put('/:id', stores_controller_1.storesController.putStoreDataById)
    .post('/', stores_controller_1.storesController.postStore)
    .delete('/:id', stores_controller_1.storesController.deleteStore);
exports.default = router;
