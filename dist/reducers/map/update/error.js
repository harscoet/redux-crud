"use strict";
var error_1 = require("../../common/update/error");
var constants_1 = require("../../../constants");
var invariants_1 = require("../invariants");
var store_1 = require("../store");
var reducerName = constants_1.default.REDUCER_NAMES.UPDATE_ERROR;
var invariantArgs = {
    reducerName: reducerName,
    canBeArray: false,
};
function error(config, current, record) {
    invariants_1.default(invariantArgs, config, current, record);
    // We don"t want to rollback
    var key = config.key;
    var updatedId = record[key];
    var updatedRecord = current[updatedId];
    if (updatedRecord == null)
        return current;
    updatedRecord = error_1.prepareRecord(updatedRecord);
    return store_1.default.merge(config, current, updatedRecord);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = error;
