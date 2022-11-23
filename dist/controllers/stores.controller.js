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
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesController = void 0;
const stores_handlers_1 = require("../handlers/stores.handlers");
exports.storesController = {
    getAllStores: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield stores_handlers_1.storesHandler.getAllStores();
        res.json(data);
    }),
    getStoreById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield stores_handlers_1.storesHandler.getStoreById(Number(req.params.id)); // eslint-disable-line
        data.error ? res.status(404).json(data) : res.status(200).json(data);
    }),
    getStoreByType: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield stores_handlers_1.storesHandler.getStoreByType(req.params.type); // eslint-disable-line
        data.error ? res.status(404).json(data) : res.status(200).json(data);
    }),
    putStoreDataById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield stores_handlers_1.storesHandler.editStore(Number(req.params.id), req.body); // eslint-disable-line
        data.error ? res.status(500).json(data) : res.status(200).json(data);
    }),
    postStore: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield stores_handlers_1.storesHandler.createStore(req.body); // eslint-disable-line
        data.error ? res.status(500).json(data) : res.status(201).json(data);
    }),
    deleteStore: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield stores_handlers_1.storesHandler.deleteStore(Number(req.params.id)); // eslint-disable-line
        data.error ? res.status(500).json(data) : res.status(200).json(data);
    }),
};
