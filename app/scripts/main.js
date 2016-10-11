'use strict';
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

  // init behavior
  $('#fileSelect input').on('change', function () {
    getSongs(this.files);
  });
  $('#fileSelect a').click(function () {
    $('#fileSelect input').get(0).click();
    return false;
  });
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
