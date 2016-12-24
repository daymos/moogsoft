 /*eslint-disable*/
import '../css/style.css';
import '../vendor/inViewport';

import * as ctrls from './controllers';
import * as dom from './updateViewHelpers';
import * as db from './db';

window.onload = () => {
  ctrls.run()
  setTimeout( ctrls.fetchUpdate, 2000)
};

