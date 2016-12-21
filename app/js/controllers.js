 /* eslint-disable */
import Task from 'data.task'
import _ from 'ramda'

import * as db from './db';
import * as H from './helpers';
import { updateDom, clearAll } from './updateViewHelpers.js';

// list :: Object -> undefined
export const list = current => H.compose(
  updateDom,
  H.renderHistory,
  H.genArrayOfLiComponents(H.renderInvite),
  H.parse,
)(current);


export const mergeData = _.curry((history, update) => {
  // in here prep data and then call list
  return H.compose( 
    H.mergeRepeatedObjects,
    H.sort,
    H.concat(JSON.parse(history)),
    H.markUpdates)(JSON.parse(update))
})


export const run = () => {
  db.getData('history')
    .fork(err => console.log(err), list )
}

export const fetchUpdate = () => {
  Task.of(mergeData)
    .ap(db.getData('history'))
    .ap(db.getData('update'))
    .fork(err => console.log(err),res => console.log(res) )
}

