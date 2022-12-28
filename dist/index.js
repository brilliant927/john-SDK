"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookChaptersById = exports.getBookById = exports.getBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://the-one-api.dev/v2';
function getBooks(getBookDto = { skip: 0, take: 10 }) {
    let sortQuery = '';
    if (getBookDto.sort) {
        sortQuery = `&sort=${getBookDto.sort}`;
    }
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/book?offset=${getBookDto.skip}&limit=${getBookDto.take}${sortQuery}`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getBooks = getBooks;
function getBookById(id) {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/book/${id}`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getBookById = getBookById;
function getBookChaptersById(id, getchapterDto = { skip: 0, take: 10 }) {
    let sortQuery = '';
    if (getchapterDto.sort) {
        sortQuery = `&sort=${getchapterDto.sort}`;
    }
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/book/${id}/chapter?offset=${getchapterDto.skip}&limit=${getchapterDto.take}${sortQuery}`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getBookChaptersById = getBookChaptersById;
exports.default = { getBooks, getBookById, getBookChaptersById };
