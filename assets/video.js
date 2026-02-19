document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('product-video');
    if (!video) {
      return;
    }
  
    var textTracks = video.textTracks; // List of TextTrack objects
  
    console.group('[Video] Subtitle tracks');
    for (var i = 0; i < textTracks.length; i++) {
      var track = textTracks[i];
      console.log(
        'Track',
        i,
        '| label:',
        track.label,
        '| language:',
        track.language,
        '| mode:',
        track.mode
      );
    }
    console.groupEnd();
  
    // Ensure the default track is showing (browser usually does this already)
    for (var j = 0; j < textTracks.length; j++) {
      if (textTracks[j].mode === 'showing') {
        console.log('[Video] Active subtitle track:', textTracks[j].label || textTracks[j].language);
      }
    }
  });
  