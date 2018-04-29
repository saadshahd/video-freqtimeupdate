## The fork
  - Modular fork of the original component https://github.com/nathancahill/video-freqtimeupdate
  - All the credit goes for @nathancahill

## Video Frequent Time Update

HTML5 videos have some [quality events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events). One of those is [timeupdate](https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate): dispatched when the time indicated by the element's currentTime attribute has changed.

Unfortunately, this event frequency varies between 4Hz and 66Hz(!), so it's not very useful for building interfaces that need to be up to date with the video time.

Enter __Frequent Time Update__. With 100ms intervals, `freqtimeupdate` events are sent out continously while the video plays.

### Usage

1. `npm i -S video-freqtimeupdate`
1. `import * as frequent from 'video-freqtimeupdate'`

To add a listener
```
frequent.add(videoEle, cb);
```

To remove the listener
```
frequent.add(videoEle, cb);
```
