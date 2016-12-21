 /* eslint-disable */
import * as db from './db';
import * as H from './helpers';
import { updateDom, clearAll } from './updateViewHelpers.js';

// list :: Object -> undefined
export const list = current => H.compose(
   updateDom,
  H.renderHistory,
  H.trace('rendered lis: '),
  H.genArrayOfLiComponents(H.renderInvite),
  H.trace('parsed data: '),
  H.parse,
)(current);


// updateHistoryModel Object history -> Object update -> Object current
export const updateHistoryModel = (update) => {
}

export const run = () => {
  db.getData('history')
  .fork(err => console.log(err), list )
  


}
