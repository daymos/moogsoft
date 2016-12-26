//  This simulate an asyn connection to db.

import Task from 'data.task';
import * as data from '../../assets/data';

// getData :: String JSON -> String url -> Task JSON
export const getData = (d => path => (
   new Task((reject, resolve) => (
    setTimeout(() => resolve(d[path]), 200)
  ))
))(data);

