import '../css/style.css';
import '../vendor/inViewport';

import * as ctrls from './controllers';

window.onload = () => {
  ctrls.run();
  setTimeout(ctrls.fetchUpdate, 2000);
};

