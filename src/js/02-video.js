import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeSet, 1000));

function onTimeSet(evt) {
  const savedKey = localStorage.getItem('videoplayer-current-time');
  if (savedKey) {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
  }
}

const parsedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(parsedTime);
