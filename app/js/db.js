/* eslint-disable */

//  This simulate an asyn connection to db.

import Task from 'data.task'
import * as data from '../../assets/data.js'

// getData :: String JSON -> String url -> Task JSON
export const getData = (data => path => (
   new Task((reject, resolve) => (
    setTimeout( () => resolve(data[path]), 200 ) 
  ))
))(data)


