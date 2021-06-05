"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortBy = void 0;
function sortBy(array, key, direction) {
    const compareDesc = (a, b) => (a[key] > b[key] ? -1 : 1);
    const compareAsc = (a, b) => (a[key] < b[key] ? -1 : 1);
    const sorter = direction === 'asc' ? compareAsc : compareDesc;
    return [...array.sort(sorter)];
}
exports.sortBy = sortBy;
//# sourceMappingURL=array.js.map