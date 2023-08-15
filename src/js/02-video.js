const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTime, 1000));

function onTime(data) {
  let currentTime = data.seconds;
  //   console.dir(data.seconds);
  localStorage.setItem('videoplayer-current-time', currentTime);
}

document.addEventListener('DOMContentLoaded', function () {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime));
    //   .then(function (seconds) {})
    //   .catch(function (err) {
    //     switch (err.name) {
    //       case 'RangeError':
    //         break;
    //       default:
    //         break;
  }
});
//   }
// });
