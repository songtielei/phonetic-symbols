'use strict';

$(function () {
  var showVideo = function (src) {
    var source = $('.modal video').get(0);
    var url;
    url = localStorage.getItem(src);
    source.src = url;
    source.play();
    $('.modal').modal();
  };
  $('dl dd').on('click', 'a', function () {
    showVideo($(this).attr('href'));
    return false;
  });
});

function getUrl(file) {
  var url;
  if (window.createObjectURL) {
    url = window.createObjectURL(file)
  } else if (window.createBlobURL) {
    url = window.createBlobURL(file)
  } else if (window.URL && window.URL.createObjectURL) {
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL && window.webkitURL.createObjectURL) {
    url = window.webkitURL.createObjectURL(file)
  }
  return url;
}


function canPlay(type) {
  var a = document.createElement('audio');
  return !!(a.canPlayType && a.canPlayType(type).replace(/no/, ''));
}


function getSongs(files) {
  $("#mask").hide();
  $("#startup").hide();
  var queue = [];
  var mp3 = canPlay('audio/mpeg;'), ogg = canPlay('audio/ogg; codecs="vorbis"');
  var url;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    var path = file.webkitRelativePath || file.mozFullPath || file.name;
    if (path.indexOf('.AppleDouble') != -1) {
      // Meta-data folder on Apple file systems, skip
      continue;
    }
    var size = file.size || file.fileSize || 4096;
    if (size < 4095) {
      // Most probably not a real MP3
      console.log(path);
      continue;
    }

    if (file.name.indexOf('mp3') != -1) { //only does mp3 for now
      if (mp3) {
        queue.push(file);
      }
    }
    if (file.name.indexOf('ogg') != -1 || file.name.indexOf('oga') != -1) {
      if (ogg) {
        queue.push(file);
      }
    }

    url = getUrl(file);
    localStorage.setItem(file.name, url);

  }

}


$(function () {
  //with no dependencies, it should be fine to use this instead of ondomcontentloaded
  var a = document.createElement('audio');
  if (!a.canPlayType) {
    $("#support").append('Your browser does not support HTML5 Audio<br>');
  }
  if (!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''))) {
    $("#support").append('Your browser does not support Ogg Vorbis Playback<br>');
  }

  if (!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''))) {
    $("#support").append('Your browser does not support MP3 Playback<br>');
  }

  var f = document.createElement('input');
  f.type = 'file';
  if (!('multiple' in f)) {
    $("#support").append('Your browser does not support selecting multiple files<br>');
  }
  if (!('webkitdirectory' in f)) {
    $("#support").append('Your browser probably does not support selecting directories<br>');
  }
  if (window.createObjectURL) {
  } else if (window.createBlobURL) {
  } else if (window.URL && window.URL.createObjectURL) {
  } else if (window.webkitURL && window.webkitURL.createObjectURL) {
  } else {
    $("#support").append('Your browser probably does not support Object URLs<br>');
  }

});
