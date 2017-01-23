import * as r from "ramda"

import assertAllHaveKeys from "../../../utils/assertAllHaveKeys"
import constants from "../../../constants"
import makeScope from "../../../utils/makeScope"
import store from "../store"
import wrapArray from "../../../utils/wrapArray"

import { Config, ReducerName } from "../../../types"

var reducerName: ReducerName = constants.REDUCER_NAMES.FETCH_SUCCESS

export default function success(config: Config, current: Array<any>, records: any): Array<any> {
	var scope = makeScope(config, reducerName)

	if (!config.key)              throw new Error(scope + ": Expected config.key")
	if (!r.is(Array, current))    throw new Error(scope + ": Expected current to be an array")
	if (!records)                 throw new Error(scope + ": Expected records")

	// wrap array
	records = wrapArray(records)

	// All given records must have a key
	assertAllHaveKeys(config, reducerName, records)
	
	return store.merge(current, records, config.key)
}