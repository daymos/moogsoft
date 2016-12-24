 /* eslint-disable */
import Task from 'data.task'
import _ from 'ramda'

import * as db from './db';
import * as H from './helpers';
import { updateDom, clearAll } from './updateViewHelpers.js';
import * as rH from './renderHelpers.js';

// list :: Object -> undefined
export const list = current => H.compose(
  updateDom,
  rH.renderHistory,
  H.genArrayOfLiComponents(rH.renderInvite),
  //H.sortByDescendingTime,
  H.sortByReverseInviteId, 
  H.parse,
)(current);

export const mergeData = _.curry((history, update) => (
  H.compose( 
    //   H.sortByDescendingTime,
    H.sortByReverseInviteId,
    H.trace('tracing merge  result: '),
    H.mergeRepeatedObjects,
    H.sortByInviteId,
    H.concat(JSON.parse(history)),
    H.markUpdates)(JSON.parse(update))
))

export const run = () => {
  db.getData('history')
    .fork(err => console.log(err), list )
}

export const fetchUpdate = () => {
  Task.of(mergeData)
    .ap(db.getData('history'))
    .ap(db.getData('update'))
    .fork(err => console.log(err),res =>{ list(res)} )
}

