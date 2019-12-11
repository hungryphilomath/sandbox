import {projectName} from './constants.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log(`${projectName}: DOMContentLoaded event`);
});

window.addEventListener('load', () => {
  console.log(`${projectName}: load event`);
});
