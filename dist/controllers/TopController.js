"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTop = void 0;
function getTop(req, res) {
    res.render('top/index', { title: 'Movies' });
}
exports.getTop = getTop;
