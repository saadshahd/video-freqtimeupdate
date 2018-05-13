require('custom-event-polyfill');

var freqtimeupdate = global.CustomEvent('freqtimeupdate');
var frequency = 100;

function setInterval() {
  if (!this.hasOwnProperty('_interval')) {
    this._interval = global.setInterval(intervalFunc.bind(this), frequency);
  }
}

function clearInterval() {
  global.clearInterval(this._interval);
  delete this._interval;
}

function intervalFunc() {
  this.dispatchEvent(freqtimeupdate);
}

function add($video, cb) {
  if (!$video.paused) setInterval.call($video);

  $video.addEventListener('play', setInterval);
  $video.addEventListener('playing', setInterval);
  $video.addEventListener('seeking', setInterval);

  $video.addEventListener('abort', clearInterval);
  $video.addEventListener('emptied', clearInterval);
  $video.addEventListener('ended', clearInterval);
  $video.addEventListener('pause', clearInterval);
  $video.addEventListener('seeked', clearInterval);

  $video.addEventListener('seeked', cb);
  $video.addEventListener('freqtimeupdate', cb);
}

function remove($video, cb) {
  if ($video.paused) clearInterval.call($video);

  $video.removeEventListener('play', setInterval);
  $video.removeEventListener('playing', setInterval);
  $video.removeEventListener('seeking', setInterval);

  $video.removeEventListener('abort', clearInterval);
  $video.removeEventListener('emptied', clearInterval);
  $video.removeEventListener('ended', clearInterval);
  $video.removeEventListener('pause', clearInterval);
  $video.removeEventListener('seeked', clearInterval);

  $video.removeEventListener('seeked', cb);
  $video.removeEventListener('freqtimeupdate', cb);
}

module.exports = {
  add: add,
  remove: remove
}
