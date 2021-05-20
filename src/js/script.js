import {projectName} from './common/constants.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log(`${projectName}: DOMContentLoaded`);
});

window.addEventListener('load', () => {
  console.log(`${projectName}: load event`);

   const playerEl = document.getElementsByTagName('video')[0];

   console.log(playerEl);


  const playerEventHandler = (e) => {
    switch (e.type) {
      case 'play':
        console.log('played');
        playerEl.addEventListener('timeupdate', playerEventHandler);
        break;
      case 'timeupdate':
        console.log(Math.round(e.target.currentTime));
        break;
    }
  };

  playerEl.addEventListener('play', playerEventHandler, {once: true});
});
