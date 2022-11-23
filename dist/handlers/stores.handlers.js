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
exports.storesHandler = void 0;
const db_config_1 = __importDefault(require("../db/db.config"));
const processQueryResult = (data) => {
    return Object.values(JSON.parse(JSON.stringify(data)));
};
exports.storesHandler = {
    getAllStores: () => __awaiter(void 0, void 0, void 0, function* () {
        const [result] = yield db_config_1.default.query('SELECT * FROM stores');
        return processQueryResult(result);
    }),
    getStoreById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const [result] = yield db_config_1.default.query(`SELECT * FROM stores WHERE id = ${id}`);
        const data = processQueryResult(result);
        return data.length === 0 ? { error: 'ID does not exist' } : data;
    }),
    getStoreByType: (type) => __awaiter(void 0, void 0, void 0, function* () {
        if (type !== 'farmacias' && type !== 'opticas')
            return { error: 'Incorrect type' };
        const [result] = yield db_config_1.default.query(`SELECT * FROM stores WHERE type = "${type}"`);
        console.log('result', result);
        return processQueryResult(result);
    }),
    editStore: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (!data.name || !data.address || !data.loc || !data.type || !data.state || !data.createdAt)
            return { error: 'Incorrect data' };
        const storeExists = yield exports.storesHandler.getStoreById(id); // eslint-disable-line
        if (storeExists.error)
            return { error: 'Wrong ID' };
        const [result] = yield db_config_1.default.query(`UPDATE stores SET
    name = "${data.name}" ,
    address = "${data.address}",
    phone = ${data.phone ? `"${data.phone}"` : null},
    coordenates = "${data.coordenates ? `"${data.coordenates}"` : null}",
    loc = "${data.loc}",
    type = "${data.type}",
    state = "${data.state}",
    brand = "${data.brand ? `"${data.brand}"` : null}",
    createdAt = "${data.createdAt}",
    editedAt = "${data.editedAt ? `"${data.editedAt}"` : null}"
    WHERE id = ${id}`);
        return processQueryResult(result);
    }),
};
